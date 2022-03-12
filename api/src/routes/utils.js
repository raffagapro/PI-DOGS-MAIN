const axios = require('axios');
const { API_KEY } = process.env;
const { Op } = require('sequelize');

const { Dog, Temperament } = require('../db');

//grabs data from API
const apiInfo = async() =>{
    let apiDogs = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
    return internalPacker(apiDogs.data, "API");
}

//grabs data from DB
const dbInfo = async() =>{
    let dbDogs = await Dog.findAll({
        include: {
            model: Temperament,
            attributes:['name']
        }
    });
    //MIGHT NEED TO STRINGIFY THE TEMPERAMENTS
    return internalPacker(dbDogs);
}

//searches API
const apiSearch = async(value) =>{
    let apiResult = await axios.get(`https://api.thedogapi.com/v1/breeds/search?api_key=${API_KEY}&q=${value}`);
    return internalPacker(apiResult.data, "API");
}

//searches API
const dbSearch = async(value) =>{
    let dbResult = await Dog.findAll({
        where:{
            name: {
                [Op.like]: '%'+value+'%'
            }
        },
        include: Temperament
    });
    // console.log(dbResult);
    return internalPacker(dbResult);
}

//consolidates data and pushes a list of names
const getBreedList = async(value) =>{
    const apiList = value ? await apiSearch(value) : await apiInfo();
    const dbList = value ? await dbSearch(value) : await dbInfo();
    const list = apiList.concat(dbList);
    //NNEDS TO ORDER BY NAME
    return list;
}

const getBreedByID = async(id) =>{
    let foundBreed = false;
    //checks to see if the id comes from the DB
    if (id.includes('DB')) {
        id = id.replace("DB", "");
        let listDB = await dbInfo();
        listDB.forEach(e => {
            if (e.id === parseInt(id)) foundBreed = e;
        });
    }else{
        let listAPI = await apiInfo();
        listAPI.forEach(e => {
            if (e.id === parseInt(id)) foundBreed = e;
        });
    }
    return foundBreed;
}

const getTempList = async() =>{
    //checks DB to see if there are temps on it
    let tempList = await Temperament.findAll({
        attributes:['name']
    });
    //if Temps table empty it pulls temps from the API
    if (tempList.length === 0) {
        let apiObjs = await apiInfo();
        apiObjs.map(e => {
            if (e.temperament) {
                //removes empty spaces and splist the temps string into indv values
                let intTempList = e.temperament.replaceAll(" ", "").split(",");
                //checks to see if temp already exists on DB, if not creates one.
                intTempList.forEach(async li => await Temperament.findOrCreate({
                    where:{ name: li.toLowerCase() },
                }));
            }
        });
        //pull all the new temps from the DB
        tempList = await Temperament.findAll({
            attributes:['name']
        });
    }
    return tempList;
}

const createBreed = async(name, height_min, height_max, weight_min, weight_max, life_span, temperaments, imgUrl) =>{
    let error = null;
    let apiObjs = await apiSearch(name);
    if (apiObjs > 0) {
        //checks API for the name
        apiObjs.forEach(b => {
            if (b.name === name) error = {error: 'The name of the breed is already in use, or the breed already exists!'};
        });
        if (error) return error;
    }
    //checks DB for name
    let [createBreed, created] = await Dog.findOrCreate({
        where:{ name },
        defaults:{
            height: `${height_min} - ${height_max}`,
            weight: `${weight_min} - ${weight_max}`,
            life_span,
            imgUrl
        }
    });
    //if name already exist
    if (!created) return {error: 'The name of the breed is already in use, or the breed already exists!'};
    //if breed was created add the temps
    await createBreed.addTemperament(temperaments);
    return createBreed;
}

const internalPacker = (arr, dataOrigin = "DB") =>{
    let retrunArr = [];
    arr.map(d => retrunArr.push({
        id: dataOrigin === "API" ? d.id : `DB${d.id}`,
        name: d.name,
        temperament: dataOrigin === "API" ? d.temperament: d.temperaments.map(e => e.name).join(", "),
        weight: dataOrigin === "API" ? d.weight.metric : d.weight,
        height: dataOrigin === "API" ? d.height.metric : d.height,
        life_span: d.life_span,
        img: d.image ? d.image.url : `https://cdn2.thedogapi.com/images/${d.reference_image_id}.jpg`
    }));
    return retrunArr;
} 

module.exports = {
    apiInfo,
    dbInfo,
    apiSearch,
    dbSearch,
    getBreedList,
    getBreedByID,
    getTempList,
    createBreed
}
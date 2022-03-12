const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require('axios');
const {API_KEY} = process.env;
const { Dog, Temperament } = require('../db');
const { getBreedList, getBreedByID, getTempList, createBreed, dbSearch } = require('./utils');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/test', async(req, res) =>{
    const { breed } = req.query;
    let breedList = await dbSearch(breed.toLocaleLowerCase());
    // console.log(breedList);
    res.send(breedList);
});

router.get('/dogs', async(req, res) =>{
    const { breed } = req.query;
    let breedList = await getBreedList(breed ? breed.toLocaleLowerCase() : null);
    if (breedList.length === 0) return res.send({error: 'Breed not found!'});
    res.send(breedList);
});

router.post('/dog', async(req, res) =>{
    const { name, height_min, height_max, weight_min, weight_max, life_span, temperaments, imgUrl } = req.body;
    if (name && height_min && height_max && weight_min && weight_max && life_span && temperaments) {
        let createdBreed = await createBreed(name, height_min, height_max, weight_min, weight_max, life_span, temperaments, imgUrl);
        if (createdBreed.error) return res.send({error});
        return res.send(createdBreed);
    }
    res.send({error: "There are missing parameters"});
});

router.get('/dogs/:idRaza', async(req, res) =>{
    const { idRaza } = req.params;
    let foundBreed = await getBreedByID(idRaza);
    res.send(foundBreed);
});

router.get('/temperament', async(req, res) =>{
    let temperamentList = await getTempList();
    res.send(temperamentList);
});

module.exports = router;

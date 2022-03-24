import axios from 'axios'
export const GET_ALL_BREEDS = 'GET_ALL_BREEDS';
export const GET_BREED_BY_NAME = 'GET_BREED_BY_NAME';
export const GET_BREED_BY_ID = 'GET_BREED_BY_ID';
export const GET_TEMPS = 'GET_TEMPS';
export const CREATE_BREED = 'CREATE_BREED';
export const FILTER_BREEDS_BY_TEMP = 'FILTER_BREEDS_BY_TEMP';
export const FILTER_BREEDS_BY_SOURCE = 'FILTER_BREEDS_BY_SOURCE';
export const SORT_BREEDS_BY_AZ = 'SORT_BREEDS_BY_AZ_ASC';
export const SORT_BREEDS_BY_WEIGHT = 'SORT_BREEDS_BY_AZ_ASC';
export const SET_CHOSEN_FIVE = 'SET_CHOSEN_FIVE';
export const CLEAR_FILTERS = 'CLEAR_FILTERS';

//CHENGE TO REAL SERVER FOR PRODUCTION
const SERVER_URL = 'http://localhost:3001';

export const getAllBreeds = () =>{
    try {
        return async dispatch =>{
            let { data } = await axios.get(`${SERVER_URL}/dogs`);
            // console.log(data);
            return dispatch({
                type: GET_ALL_BREEDS,
                payload: data 
            });
        }
    } catch (e) { console.log(e); }
}

export const getBreedByName = name =>{
    try {
        return async dispatch =>{
            var { data } = await axios.get(`${SERVER_URL}/dogs?breed=${name}`);
            return dispatch({
                type: GET_BREED_BY_NAME,
                payload: [data, name] 
            });
        }
    } catch (e) { console.log(e); }
}

export const getBreedById = id =>{
    try {
        return async dispatch =>{
            var result = await axios.get(`${SERVER_URL}/dogs/${id}`);
            //console.log(result);
            return dispatch({
                type: GET_BREED_BY_ID,
                payload: result.data 
            });
        }
    } catch (e) { console.log(e); }
}

export const getTemps = () =>{
    try {
        return async dispatch =>{
            var result = await axios.get(`${SERVER_URL}/temperament`);
            //console.log(result);
            return dispatch({
                type: GET_TEMPS,
                payload: result.data 
            });
        }
    } catch (e) { console.log(e); }
}

export const createBreed = payload =>{
    try {
        return async dispatch =>{
            var result = await axios.post(`${SERVER_URL}/dog`, payload);
            console.log(result);
            return dispatch({
                type: CREATE_BREED,
                payload: result 
            });
        }
    } catch (e) { console.log(e); }
}

//payload = temperament name string
export const filterBreedsByTemp = payload =>{
    return async dispatch =>{
        return dispatch({
            type: FILTER_BREEDS_BY_TEMP,
            payload
        });
    }
}

//payload = resource = 'DB' or 'API'
export const filterBreedsBySource = payload =>{
    return async dispatch =>{
        return dispatch({
            type: FILTER_BREEDS_BY_SOURCE,
            payload
        });
    }
}

export const clearFilters = payload =>{
    return async dispatch =>{
        return dispatch({
            type: CLEAR_FILTERS,
            payload
        });
    }
}

//payload = 'az' or 'za'
export const sortBreedsByAz = payload =>{
    return async dispatch =>{
        console.log('ACTIONS:');
        console.log(payload)
        return dispatch({
            type: SORT_BREEDS_BY_AZ,
            payload
        })
    }
}

//payload = 'wu' or 'wd'
export const sortBreedsByWeight = payload =>{
    return async dispatch =>{
        console.log('ACTIONS:');
        console.log(payload)
        return dispatch({
            type: SORT_BREEDS_BY_WEIGHT,
            payload
        })

    }
}

export const setChosenFive = payload =>{
    return {
        type: SET_CHOSEN_FIVE,
        payload
    }
}
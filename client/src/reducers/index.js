import {
    GET_ALL_BREEDS,
    GET_BREED_BY_NAME,
    GET_BREED_BY_ID,
    GET_TEMPS,
    CREATE_BREED,
    FILTER_BREEDS_BY_TEMP,
    FILTER_BREEDS_BY_SOURCE,
    SORT_BREEDS_BY_AZ,
    SORT_BREEDS_BY_WEIGHT,
    SET_CHOSEN_FIVE
} from '../actions';

const initialState = {
    breeds: [],
    invBreed: [],
    temps: [],
    chosenFive: []
}

const rootReducer = (state = initialState, action) =>{
    switch (action.type) {
        case GET_ALL_BREEDS:
            return{
                ...state,
                breeds: action.payload
            }

        case GET_BREED_BY_NAME:
            return{
                ...state,
                breeds: action.payload
            }
        
        case GET_BREED_BY_ID:
            return{
                ...state,
                invBreed: action.payload
            }
        
        case GET_TEMPS:
            return{
                ...state,
                temps: action.payload
            }
        
        case CREATE_BREED:
            return{
                ...state,
                invBreed: action.payload
            }
        
        case FILTER_BREEDS_BY_TEMP:
            const filteredBreeds = state.breeds.filter(b => b.temperament.includes(action.payload));
            return{
                ...state,
                breeds: filteredBreeds
            }

        case FILTER_BREEDS_BY_SOURCE:
            const filteredBreedz = state.breeds.filter(b => b.temperament.id(action.payload));
            return{
                ...state,
                breeds: filteredBreedz
            }

        case SORT_BREEDS_BY_AZ:
            const sortedBreeds = action.payload === 'az' ?
                state.breeds.sort((a, b) =>{
                    if (a.name > b.name) return 1;
                    if (b.name > a.name) return -1;
                    return 0;
                }):
                state.breeds.sort((a, b) =>{
                    if (a.name > b.name) return -1;
                    if (b.name > a.name) return 1;
                    return 0;
                });
            return{
                ...state,
                breeds: sortedBreeds
            }
        
        case SORT_BREEDS_BY_WEIGHT:
            const sortedBreedz = action.payload === 'wu' ?
                state.breeds.sort((a, b) =>{
                    let aW = a.weight.replaceAll(" ", "").split("-");
                    let bW = b.weight.replaceAll(" ", "").split("-");
                    return bW[0] - aW[0];
                }):
                state.breeds.sort((a, b) =>{
                    let aW = a.weight.replaceAll(" ", "").split("-");
                    let bW = b.weight.replaceAll(" ", "").split("-");
                    return aW[0] - bW[0];
                });
            return{
                ...state,
                breeds: sortedBreedz
            }
        case SET_CHOSEN_FIVE:
            return{
                ...state,
                chosenFive: action.payload
            }
    
        default:
            return state;
    }
}

export default rootReducer;
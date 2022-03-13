import React from "react";
import { container, filterItem, textInput } from './filterBar.module.css'

const FilterBar = () =>{
    return(
        <div className={container}>
            <div className={filterItem}>
                <input type="text" name="temp" className={textInput} placeholder={'Temperament'} />   
            </div>
            <div className={filterItem}>
                <input type="text" name="breed" className={textInput} placeholder={'Breed'} />   
            </div>
            <button>Search</button>
        </div>
    );
}

export default FilterBar;
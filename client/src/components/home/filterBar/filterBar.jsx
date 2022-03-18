import React from "react";
import { Link } from "react-router-dom";
import { container, filterItem, textInput, searchBtn, btnCont, btnIcon } from './filterBar.module.css';
import searchIcon from '../../../images/search.png';
import weightUp from '../../../images/sort_weight_up.png';
import weightDown from '../../../images/sort_weight_down.png';
import azUp from '../../../images/az_up.png';
import azDown from '../../../images/az_down.png';
import addIcon from '../../../images/addIcon.png';

const FilterBar = () =>{
    return(
        <form action="" className={container}>
            <div className={filterItem}>
                <input type="text" name="temp" className={textInput} placeholder={'Temperament'} />   
            </div>
            {/* Change this to a selector for API or DB */}
            <div className={filterItem}>
                <input type="text" name="source" className={textInput} placeholder={'Source'} />   
            </div>
            <div className={btnCont}>
                <span className={searchBtn}>
                    <img src={searchIcon} className={btnIcon} alt="" />
                </span>
                {/* ICON SHOULD CHANGE DEPENDING ON THE SORTING */}
                <span className={searchBtn}>
                    <img src={weightDown} className={btnIcon} alt="" />
                </span>
                <span className={searchBtn}>
                    <img src={azDown} className={btnIcon} alt="" />
                </span>
                <Link to='/create' className={searchBtn}>
                    <img src={addIcon} className={btnIcon} alt="" />
                </Link>
            </div>
        </form>
    );
}

export default FilterBar;
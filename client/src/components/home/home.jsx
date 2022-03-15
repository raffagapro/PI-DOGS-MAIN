import React from "react";
import BreedCard from "./breedCard/breedCard";
import FilterBar from "./filterBar/filterBar";
import { container, searchBtn, btnIcon, paginator, paginationText } from './home.module.css'
import backIcon from '../../images/backIcon.png';
import forwardIcon from '../../images/forwardIcon.png';


const Home = () =>{
    return(
        <>
            <div className={container}>
                <FilterBar/>
                <BreedCard />
                <BreedCard />
                <BreedCard />
                <BreedCard />
                <BreedCard />
                <BreedCard />
                <BreedCard />
                <BreedCard />
                <div className={paginator}>
                    <span className={searchBtn}>
                        <img src={backIcon} className={btnIcon} alt="" />
                    </span>
                    <small className={paginationText}>Page 1, 2, 3, 4, 5  </small>
                    <span className={searchBtn}>
                        <img src={forwardIcon} className={btnIcon} alt="" />
                    </span>
                </div>
            </div>
        </>
    );
}

export default Home;
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BreedCard from "./breedCard/breedCard";
import FilterBar from "./filterBar/filterBar";
import { container, searchBtn, btnIcon, paginator, paginationText } from './home.module.css'
import backIcon from '../../images/backIcon.png';
import forwardIcon from '../../images/forwardIcon.png';


const Home = () =>{
    const dispatch = useDispatch();
    let dogBreeds = useSelector(state => state.breeds);

    return(
        <>
            <div className={container}>
                <FilterBar/>

                <BreedCard breed={dogBreeds[0]} />
                <BreedCard breed={dogBreeds[1]} />
                <BreedCard breed={dogBreeds[2]} />
                <BreedCard breed={dogBreeds[3]} />
                <BreedCard breed={dogBreeds[4]} />
                <BreedCard breed={dogBreeds[5]} />
                <BreedCard breed={dogBreeds[6]} />
                <BreedCard breed={dogBreeds[7]} />

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
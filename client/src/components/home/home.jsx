import React from "react";
import FilterBar from "./filterBar/filterBar";
import { container } from './home.module.css'

const Home = () =>{
    return(
        <div className={container}>
            <FilterBar/>
            <h1>THIS IS HOME</h1>
        </div>
    );
}

export default Home;
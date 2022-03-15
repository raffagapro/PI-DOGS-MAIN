import React from "react";
import { container, leftPanel, midPanel, profileImg, wrapper, subTitleBox, subTitle, title, weightText, mainBtn } from './breedCard.module.css';
import placeholderImg from '../../../images/profileHolder.png'
import { Link } from "react-router-dom";

const BreedCard = () =>{
    return(
        <div className={container}>
            <div className={wrapper}>
                <div className={leftPanel}>
                    <img src={placeholderImg} alt="" className={profileImg} />
                </div>
                <div className={midPanel}>
                    <div className={subTitleBox}>
                        <h5 className={subTitle}>Curious, Playful, Active</h5>
                    </div>
                    <div>
                        <h2 className={title}>Siberian Husky</h2>
                    </div>
                    <div>
                        <h2 className={weightText}>(17 - 23kg.)</h2>
                    </div>
                    <div>
                        <Link to='/breed/255' className={mainBtn}>LEARN MORE</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BreedCard;
import React from "react";
import { Link } from "react-router-dom";
import {
    container,
    titleCont,
    iconCont,
    iconItem,
    superTitle,
    title,
    pawImg,
    thump,
    iconImg,
    iconTitle
} from './trendBar.module.css'
import pawImage from '../../../images/sec.webp'
import defaultIcon from '../../../images/profileHolder.png'


const TrendBar = () =>{
    return(
        <div className={container}>
            <div className={titleCont}>
                <img src={pawImage} className={pawImg} alt="pawpatrol!" />
                <h5 className={superTitle}>TRENDING BREEDS</h5>
                <h2 className={title}>The Furriest Of The Dogwalk</h2>
            </div>
            <div className={iconCont}>

                <div className={iconItem}>
                    <div className={thump}>
                        <Link to='/breed/15'>
                            <img src={defaultIcon} className={iconImg} alt="" />
                        </Link>
                        <h3 className={iconTitle}>Siberian Husky</h3>
                    </div>
                </div>

                <div className={iconItem}>
                    <div className={thump}>
                        <Link to='/breed/15'>
                            <img src={defaultIcon} className={iconImg} alt="" />
                        </Link>
                        <h3 className={iconTitle}>Siberian Husky</h3>
                    </div>
                </div>

                <div className={iconItem}>
                    <div className={thump}>
                        <Link to='/breed/15'>
                            <img src={defaultIcon} className={iconImg} alt="" />
                        </Link>
                        <h3 className={iconTitle}>Siberian Husky</h3>
                    </div>
                </div>

                <div className={iconItem}>
                    <div className={thump}>
                        <Link to='/breed/15'>
                            <img src={defaultIcon} className={iconImg} alt="" />
                        </Link>
                        <h3 className={iconTitle}>Siberian Husky</h3>
                    </div>
                </div>

                <div className={iconItem}>
                    <div className={thump}>
                        <Link to='/breed/15'>
                            <img src={defaultIcon} className={iconImg} alt="" />
                        </Link>
                        <h3 className={iconTitle}>Siberian Husky</h3>
                    </div>
                </div>
            </div>               
        </div>
    );
}

export default TrendBar;

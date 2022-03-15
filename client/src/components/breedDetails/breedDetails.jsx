import React from "react";
import TrendBar from '../landingPage/trendBar/trendBar'
import { container, leftPanel, rightPanel,subTitleBox, subTitle, title, attText, iconStyle, profileSyle } from './breedDetails.module.css'
import profilePhoto from '../../images/largePlaceholrde.webp'
import weightIcon from '../../images/weightIcon.png'
import heightIcon from '../../images/heightIcon.png'
import lifeIcon from '../../images/lifespanIcon.png'
import tempIcon from '../../images/temperamentIcon.png'

const BreedDetails = () =>{
    return(
        <>
            <div className={container}>
                <div className={leftPanel}>
                    <img src={profilePhoto} alt="" className={profileSyle} />
                </div>
                <div className={rightPanel}>
                    <div className={subTitleBox}>
                        <h5 className={subTitle}>Curious, Playful, Active</h5>
                    </div>
                    <div>
                        <h2 className={title}>Siberian Husky</h2>
                    </div>
                    <div>
                        <h2 className={attText}><img src={weightIcon} className={iconStyle} alt="" /> 17 - 23 kg</h2>
                    </div>
                    <div>
                        <h2 className={attText}><img src={heightIcon} className={iconStyle} alt="" /> 58 - 66cm</h2>
                    </div>
                    <div>
                        <h2 className={attText}><img src={lifeIcon} className={iconStyle} alt="" /> 12 years</h2>
                    </div>
                    <div>
                        <h2 className={attText}><img src={tempIcon} className={iconStyle} alt="" /> Curios, Playful, Active, Outgoing, Friendly, Alert, Gentle, Intelligent</h2>
                    </div>
                </div>
            </div>
            <TrendBar/>
        </>
    );
}

export default BreedDetails;
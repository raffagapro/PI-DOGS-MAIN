import React from "react"
import { Link } from "react-router-dom";
import TrendBar from './trendBar/trendBar'
import { container, subTitleBox, subTitle, title, shapeOne, mainBtn, rightCont, mainBanner, leftCont } from './landing.module.css'
import huskyImg from '../../images/huskyclean.png'



const Landing = () =>{
    return(
        <>
            <div className={container}>
                {/* LEFT PANEL */}
                <div className={leftCont}>
                    <div className={subTitleBox}>
                        <h5 className={subTitle}>Charlie Chaplin</h5>
                    </div>
                    <div>
                        <h2 className={title}>"Who feeds a hungry animal, feeds his own soul."</h2>
                    </div>
                    <div>
                        <Link to='/home' className={mainBtn}>SEARCH BREEDS</Link>
                    </div>
                </div>

                {/* RIGHT PANEL */}
                <div className={rightCont}>
                    <img className={mainBanner} src={huskyImg} alt="" />
                    <div className={shapeOne}></div>
                </div>
            </div>
            <TrendBar />
        </>
    );
}

export default Landing;
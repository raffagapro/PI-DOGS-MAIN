import React from "react";
import {
    container,
    subTitleBox,
    subTitle,
    title,
    inputCont,
    textInput,
    fromStyle,
    dColCont,
    leftMar,
    rightMar,
    mainBtn,
    btnCont,
    tempCont,
    tempBtn,
    tempsBadges,
    invBadge
} from './breedForm.module.css'

const BreedForm = () =>{
    return(
        <div className={container}>
            <div className={subTitleBox}>
                <h5 className={subTitle}>SEEN A NEW DOG AROUND?</h5>
            </div>
            <div>
                <h2 className={title}>Ceate A New Breed</h2>
            </div>
            <form action="" className={fromStyle}>
                <div className={inputCont}>
                    <input type="text" name="name" className={textInput} placeholder={'Name*'} />   
                </div>
                <div className={dColCont}>
                    <input type="number" name="minWeight" className={textInput + ' ' + rightMar} placeholder={'Min Weight (kg)*'} />
                    <input type="number" name="MaxWeight" className={textInput + ' ' + leftMar} placeholder={'Max Weight (kg)*'} />
                </div>
                <div className={dColCont}>
                    <input type="number" name="minHeight" className={textInput + ' ' + rightMar} placeholder={'Min Height (cm)*'} />
                    <input type="number" name="maxHeight" className={textInput + ' ' + leftMar} placeholder={'Max Height (cm)*'} />
                </div>
                <div className={dColCont}>
                    <input type="number" name="minLife" className={textInput + ' ' + rightMar} placeholder={'Min Lifespan (yrs)*'} />
                    <input type="number" name="maxLife" className={textInput + ' ' + leftMar} placeholder={'Max Lifespan (yrs)*'} />
                </div>
                <div className={inputCont}>
                    <input type="text" name="imgUrl" className={textInput} placeholder={'Image URL'} />   
                </div>
                <div className={dColCont}>
                    <select name="tempSearch" className={textInput + ' ' + rightMar}>
                        <option selected disabled>Select Temperaments</option>
                        <option value="volvo">Playfull</option>
                        <option value="saab">Friendly</option>
                        <option value="mercedes">Energetic</option>
                        <option value="audi">Loyal</option>
                        <option value="audi">Energetic</option>
                        <option value="audi">Confident</option>
                    </select>
                    <span className={tempBtn + ' ' + leftMar}>Add Temperament</span>
                </div>
                <hr />
                <div className={tempCont}>
                    <p className={tempsBadges}>
                        <span className={invBadge}>Playfull, </span>
                        <span className={invBadge}>Energetic, </span>
                        <span className={invBadge}>Energetic, </span>
                    </p>
                </div>
                <div className={btnCont}>
                    <button className={mainBtn}>CREATE BREED</button>
                </div>
            </form>
        </div>
    );
}

export default BreedForm;
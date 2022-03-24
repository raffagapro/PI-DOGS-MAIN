import React from "react";
import { paginator, searchBtn, btnIcon, paginationText, activePage } from './paginator.module.css'
import backIcon from '../../../images/backIcon.png';
import forwardIcon from '../../../images/forwardIcon.png';

const Paginator = ({ onPageSelect, currentPage, numPages }) =>{
    let pages = [];
    if (currentPage <= 3 ) {
        pages.push(1);
        pages.push(2);
        pages.push(3);
        pages.push(4);
        pages.push(5);
    }
    if (currentPage > 3 && currentPage < numPages-2) {
        pages.push(currentPage-2);
        pages.push(currentPage-1);
        pages.push(currentPage);
        pages.push(currentPage+1);
        pages.push(currentPage+2);
    }
    if (currentPage >= numPages-2) {
        pages.push(numPages-4);
        pages.push(numPages-3);
        pages.push(numPages-2);
        pages.push(numPages-1);
        pages.push(numPages);
    }
    return(
        <div className={paginator}>
            <span className={searchBtn}>
                <img src={backIcon} className={btnIcon} onClick={() => onPageSelect(1)} alt="" />
            </span>
            <small className={paginationText}>{
                pages.map(p => (
                    <span className={currentPage === p ? activePage : ' '} onClick={() =>onPageSelect(p)}>{`${p}, `}</span>
                ))
            }</small>
            <span className={searchBtn}>
                <img src={forwardIcon} className={btnIcon} onClick={() => onPageSelect(numPages)} alt="" />
            </span>
        </div>
    );
}

export default Paginator;
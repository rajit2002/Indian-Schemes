import React from 'react'

import './CategoryCard.css';
import { IoAddSharp } from "react-icons/io5";

import { IoIosArrowRoundForward } from "react-icons/io";
const CategoryCard = () => {
    return (
        <div className='cards-container'>
            <div className="card">
                <div className="Number">1440 < IoAddSharp /> </div>
                <div className="Schemes"> Total Schemes <IoIosArrowRoundForward /> </div>

            </div>
            <div className="card">
                <div className="Number">740 < IoAddSharp /> </div>
                <div className="Schemes"> States Schemes <IoIosArrowRoundForward /> </div>

            </div>
            <div className="card">
                <div className="Number">140 < IoAddSharp /> </div>
                <div className="Schemes">  Central Schemes <IoIosArrowRoundForward /> </div>

            </div>

        </div>
    )
}

export default CategoryCard
import React, { useState } from 'react'

import './Navbar.css'
// import logo from '../../../assets/Logo.png'

// import lang icon
import { IoLanguageOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";


//import hamnorgan icom
import { RiMenuUnfoldFill } from "react-icons/ri";
import { GiCrossedSwords } from "react-icons/gi";
const Navbar = () => {

    // HAMBORGAN ICON
    const [clicked, setClicked] = useState(false);

    return (
        < >

            <div className="navbar">

                <div className="column1">

                    <div className="logo">
                        <div className="logo-img">
                            <img src="" alt="" />
                        </div>
                        <div className="logo-text">  <span>Benefit</span>Bridges</div>
                    </div>

                </div>
                <div className="mobile-icons">
                    {clicked ? (
                        < GiCrossedSwords onClick={() => setClicked(!clicked)} className='close' />
                    ) : (
                        < RiMenuUnfoldFill onClick={() => setClicked(!clicked)} className='open' />
                    )}
                </div>



                <div className={clicked ? " column2 active" : "column2"}>
                    <div className="lang">
                        <IoLanguageOutline />
                        English
                        <IoMdArrowDropdown />
                    </div>
                    <div className="logingSignup">
                        <button> Login</button>
                    </div>
                </div>








            </div>

        </>
    )
}

export default Navbar
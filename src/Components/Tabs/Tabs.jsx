import React, { useState } from 'react'
import './Tabs.css'
import Categories from './Categories/Categories';
const Tabs = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index)

    }

    return (
        <div className="tabs">

            <div className="tabs-btn">
                <button id='btn1' className={toggleState === 1 ? "btn active-btn" : "btn"} onClick={() => toggleTab(1)}>Category</button>
                <button id='btn2' className={toggleState === 2 ? "btn active-btn" : "btn"} onClick={() => toggleTab(2)}>States Schemes</button>
                <button className={toggleState === 3 ? "btn active-btn" : "btn"} id='btn3' onClick={() => toggleTab(3)}>Central Schemes</button>

            </div>

            <div className="tabs-content">

                <div id='content1' className={toggleState === 1 ? "content active-content" : "content"}>

                    <Categories />
                </div>
                <div id='content2' className={toggleState === 2 ? "content active-content" : "content"}>
                    content2
                </div>
                <div id='content3' className={toggleState === 3 ? "content active-content" : "content"}>
                    content3
                </div>





            </div>
        </div>

    )
}

export default Tabs
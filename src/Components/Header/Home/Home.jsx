import React from 'react'
import './Home.css'

// import icon
import { FaSearchDollar } from "react-icons/fa";

const Home = () => {
    return (
        <>

            <div className='container ' id='home-section'>



                <h1>  <span>Discover</span> government Schemes <br /> for you</h1>
<hr />
                <p>Find personalized schemes based of eligibility</p>

                <div className="search-box">
                    <input type="text" placeholder='Enter Schemes Name' />

                    <button type='submit'>
                        <FaSearchDollar />
                    </button>
                </div>

            </div>

        </>



    )
}

export default Home
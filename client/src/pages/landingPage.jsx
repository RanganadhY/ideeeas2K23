import React from 'react'
import "../css/landingPage.css"
import Hero from "../assets/images/ezgif.com-video-to-gif.gif"
import Tilt from 'react-parallax-tilt';

function LandingPage() {
    return (
        <>
            <div className="main-page-wrapper">
                    <img src={Hero} alt="" />
            </div>
        </>
    )
}

export default LandingPage
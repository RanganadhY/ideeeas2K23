import React from 'react'
import "../css/landingPage.css"
import Header from '../components/header/header.jsx';
import Hero from "../assets/images/ezgif.com-video-to-gif.gif"
import Tilt from 'react-parallax-tilt';
import Cards from '../components/cards/cards';
import cardData from '../components/cards/cardData';

function LandingPage() {
    return (
        <>
            <div className="main-page-wrapper">
                <Header />
                <div className='home-hero-section'>
                    <div className='home-hero-heading-container'>
                        <div className='home-hero-title'>
                            <div className='home-hero-title-letters'>
                                <div className='hero-home-title-i'>
                                    I
                                </div>

                                <div className='hero-home-title-d'>
                                    D
                                </div>
                                <div className=' hero-home-title-e'>
                                    EEE
                                </div>
                                <div className='hero-home-title-as'>
                                    AS
                                </div>
                            </div>
                            <div className='hero-home-title-year'>
                                2K23
                            </div>
                        </div>

                        <div className='home-hero-subtitle'>
                            <div className='home-hero-Otherletters'> ORGANIZED BY </div>
                            <div className='home-hero-space'> .</div>
                            <div className='home-hero-letters'>IEEE SIT SB</div>
                        </div>
                    </div>
                    <div className='home-hero-image'>
                        <img src={Hero} alt="" />
                    </div>
                </div>
                <br></br>
                <div className='home-events-title'>
                    OUR EVENTS
                </div>
                <div className='home-event-cards'>
                    <Cards details={cardData} />
                </div>
            </div>
        </>
    )
}

export default LandingPage
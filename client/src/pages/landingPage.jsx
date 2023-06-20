import React, { useEffect } from 'react'
import "../css/landingPage.css"
import Header from '../components/header/Header';
import Hero from "../assets/images/ezgif.com-video-to-gif.gif"
import Tilt from 'react-parallax-tilt';
import Slider from '../components/slider/slider';
import Cards from '../components/cards/cards';
import cardData from '../components/cards/cardData';
import Footer from '../components/footer/footer'
import Fade from 'react-reveal/Fade';
import Aos from 'aos'
import 'aos/dist/aos.css'
import Timeline from '../components/timeline/timeline';
import Marquee from "react-fast-marquee";

function LandingPage() {

    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);
    return (
        <>
            <div className="main-page-wrapper">
                <Header />
                <div className='home-hero-section'>
                    <div className='home-hero-heading-container'>
                        {/* <div className='home-hero-title'>
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
                        </div> */}
                        <div className='home-hero-title-sp'>
                            {/* <span className='hero-home-title-i'>I</span>
                            <span className='home-hero-title-Otherletters'>D</span>
                            <span className='hero-home-title-i'>EEE</span>
                            <span className='home-hero-title-Otherletters'>AS</span>

                            <span className='home-hero-title-Otherletters'>2K23</span> */}

                            {/* <span className='home-hero-title-letters'><span className='hero-home-title-i'>I</span>D<span className='hero-home-title-i'>EEE</span>AS  <span>2K23</span></span> */}
                            <span className='home-hero-title-letters'>
                                <span className='hero-home-title-i'>I</span>
                                <span className='hero-home-title-d'>D</span>
                                <span className='hero-home-title-i'>EEE</span>
                                <span className='hero-home-title-d'>AS</span>
                                <span className='hero-home-title-num'> 2K23</span>
                            </span>
                            <span className='home-hero-subtitle'>
                                <span className='home-hero-Otherletters'>ORGANIZED  BY</span><span>IEEE SIT SB</span></span>
                        </div>
                        {/* <div className='home-hero-subtitle'>
                            <div className='home-hero-Otherletters'> ORGANIZED BY </div>
                            <div className='home-hero-space'> .</div>
                            <div className='home-hero-letters'>IEEE SIT SB</div>
                        </div> */}
                    </div>
                    <div className='home-hero-image'>
                        <img src={Hero} alt="" />
                    </div>
                </div>
                <div className='eve-text-slider'>
                    <Marquee>
                        <p> Trademark Theme : "ART AND CULTURE"  </p>
                    </Marquee>
                    <Marquee>
                        <p> Trademarks registrations will be open till  June 22nd(6 P.M ) and the last date to submit the logo is June 22 at(11P.M).</p>
                    </Marquee>
              </div>
                <br></br>
                <div className='home-sponserers'>
                        <Slider/>
                </div>
                <div className='home-events-title'>
                    <p>OUR EVENTS</p>
                </div>
                <Fade bottom distance="20%" duration={1000} >

                    <div data-aos="fade-up" className='home-event-cards'>
                        <Cards details={cardData} />
                    </div>
                </Fade>
                <div data-aos="fade-up" className='home-timeline'>
                    <span className='ideeas-timeline-header'> IDEEEAS 2K23 SCHEDULE</span>
                    <Timeline />

                </div>

                {/* <div data-aos="fade-up" className='home-event-cards'>
                    <Cards details={cardData} />
                </div> */}
                <div className='home-footer'>
                    <Footer />

                </div>
            </div>
        </>
    )
}

export default LandingPage
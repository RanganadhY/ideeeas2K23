import React from 'react'
import Animation from '../components/animation/animation'
import Tilt from 'react-parallax-tilt';
import '../css/eventsPage.css';
import webifyImg from '../assets/images/webify.webp'
import Cards from '../components/cards/cards'
import cardData from '../components/cards/cardData'
// import {Cards,cardData} from '../components/cards/cards'
function eventsPage() {
  return (
    <>
    <div className='eve-main-container'>
      <Animation />
      <div className='eve-sub-container'>
       Events
      </div>
      </div>
      <div className='eve-title'>
       OUR EVENTS 
      </div>
      <div className='eve-cards'>
      <Cards details = {cardData}/>
      </div>
      {/* <div className='events-card-main'>
     
        <div className='eve-card-img'>
          <img src={webifyImg} alt='Webify-image'></img>
          <div className='eve-card-body'>
            <div className='eve-card-heading'>
              web designing contest
            </div>
            <div className='eve-card-btn'>
              <button>REGISTER NOW</button>
            </div>
          </div>
        </div>

      </div>
    */}

    </>
  )
}

export default eventsPage
import React from 'react'
import { useParams } from 'react-router-dom';
import Animation from '../components/animation/animation'
import Tilt from 'react-parallax-tilt';
import '../css/eventsPage.css';
// import events from '../../public/eventPosters/'
import Header from '../components/header/Header';
// import web from '../assets/images/posters/webify.webp'
// import webifyPoster from '../assets/images/posters/webify copy 2.webp'
import img from "../assets/images/posters/webify.webp"
import details from './events.json'
function EventsPage(props) {
  const { eventNum } = useParams();
  const eventDetails = details[eventNum];
  console.log(eventDetails)

  return (
    <>

      <div className='events-page-wrapper'>


        <Header />
        {/* <div className='eve-main-container'>
        <Animation />
     
        <div className='eve-sub-container'>
          <div className='eve-main-heading'>
            EVENTS
          </div>
        </div>


      </div> */}
        {/* <div className='eve-title'>
        OUR EVENTS
      </div> */}
        <div className='eve-content-container'>
          <div className='eve-content-sub-container'>
          <div className='eve-content-text'>
            <div className='eve-content-text-heading'>
              {eventDetails.name}

            </div>
            <span className='eve-content-text-desc'>
              {eventDetails.description}
            </span>
            <div className='eve-register-btn'>
              <button>REGISTER</button>
              <button>DOWNLOAD BROCHURE</button>
              {eventDetails.link && <button >DOWNLOAD ABSTRACT</button>}
            </div>
          </div>
          </div>
          <div className='eve-content-poster'>
            <div className='eve-content-poster-image'>
              <img src={"/eventPosters/" + eventDetails.poster} />

              {/* <img src={web}  /> */}
              {/* <img src={'../assets/images/posters/' + eventDetails.poster} /> */}

            </div>
          </div>
        </div>
        <div className='eve-sub-content'>

        </div>
      </div>
    </>
  )
}

export default EventsPage
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Animation from '../components/animation/animation'
import Tilt from 'react-parallax-tilt';
import '../css/eventsPage.css';
// import events from '../../public/eventPosters/'
import Header from '../../src/components/header/header';
import { IoArrowRedoCircle } from 'react-icons/io5';
// import web from '../assets/images/posters/webify.webp'
// import webifyPoster from '../assets/images/posters/webify copy 2.webp'
import details from './events.json'
import moneyIcon from '../assets/images/icons/cash.png'
import teamIcon from '../assets/images/icons/teamwork (1).png'
import locationIcon from '../assets/images/icons/location (2).png'
import eligiblityIcon from '../assets/images/icons/criteria.png'
import Point from '../assets/images/icons/point.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
function EventsPage(props) {
  const { eventNum } = useParams();
  const eventDetails = details[eventNum];
  console.log(eventDetails)

  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);

  const handleDownloadBrochure = async (link) => {

    window.open(link, "_blank")
  }
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
          <div data-aos="fade-right" className='eve-content-sub-container'>
            <div className='eve-content-text'>
              <div className='eve-content-text-heading'>
                <h2>{eventDetails.name}</h2>

              </div>
              <div className='eve-content-text-desc'>
                <p>{eventDetails.description}</p>
              </div>
              <div className='eve-extra-details'>
                <div className="eve-details-container">
                  <div className="event-details-icon">
                    <img src={teamIcon} />
                  </div>
                  <div className="event-details-text-container">
                    <p className='eve-details-desc-text'><span className='event-label'><p>Team size :</p></span> <p className='event-page-rule-info'>{eventDetails.teamsize}</p></p>
                  </div>
                </div>
                <div className="eve-details-container">
                  <div className="event-details-icon">
                    <img src={eligiblityIcon} />
                  </div>
                  <div className="event-details-text-container">
                    <p className='eve-details-desc-text'><span className='event-label'><p>Eligiblity:</p></span><p className='event-page-rule-info'>{eventDetails.Eligibility}</p></p>
                  </div>
                </div>
                <div className="eve-details-container">
                  <div className="event-details-icon">
                    <img src={locationIcon} />
                  </div>
                  <div className="event-details-text-container">
                    <p className='eve-details-desc-text'><span className='event-label'><p>Location  :</p></span><p className='event-page-rule-info'>{eventDetails.location}</p></p>
                  </div>
                </div>
                <div className="eve-details-container">
                  <div className="event-details-icon">
                    <img src={moneyIcon} />
                  </div>
                  <div className="event-details-text-container">
                    <p className='eve-details-desc-text'>
                      <span className='event-label'><p>Entry fee :</p></span>
                      <p className='event-page-rule-info'>{eventDetails.entryfee}</p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-left" className='eve-content-poster'>
            <div className='eve-content-poster-image'>
              <img src={"/eventPosters/" + eventDetails.poster} />

              {/* <img src={web}  /> */}
              {/* <img src={'../assets/images/posters/' + eventDetails.poster} /> */}

            </div>
          </div>
        </div>
        
        <div className='eve-btn-container' >
          <div className='eve-register-btn'>
            <button className='event-button' >REGISTER</button>
            <button className='event-button' onClick={() => handleDownloadBrochure(eventDetails.brochure)}>DOWNLOAD BROCHURE</button>
            {eventDetails.link && <button className='event-button'>UPLOAD FILE</button>}
          </div>
        </div>
        <section className='eve-template-content'>

          <div className='eve-template-container'>
          {eventDetails.template &&
            <div className='eve-temp-name'><h2>For Materials refer the link below</h2>
              <div className="eve-temp-name-subContainer">
                <div className='eve-temp-icon'>
                  <IoArrowRedoCircle />
                </div>
                <a href={eventDetails.template} target={"_blank"}>Synopsis Template</a></div></div>}
          </div>
        <div classNme='eve-template-container'>
        {eventDetails.id === 9 && <div className='eve-temp-name'>
            <div className="eve-temp-name-subContainer">
              <div className='eve-temp-icon'>
                <IoArrowRedoCircle />
              </div>
              <a href={eventDetails.problemDescLink} target={"_blank"}>Problem Description</a></div></div>}
        </div>

          
        </section>
      </div>
    </>
  )
}

export default EventsPage
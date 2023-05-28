import React, { useEffect }from 'react'
import { useParams } from 'react-router-dom';
import Animation from '../components/animation/animation'
import Tilt from 'react-parallax-tilt';
import '../css/eventsPage.css';
// import events from '../../public/eventPosters/'
import Header from '../components/header/Header';
// import web from '../assets/images/posters/webify.webp'
// import webifyPoster from '../assets/images/posters/webify copy 2.webp'
import details from './events.json'
import moneyIcon from '../assets/images/icons/money.png'
import teamIcon from '../assets/images/icons/teamsize.png'
import locationIcon from '../assets/images/icons/location (1).png'
import eligiblityIcon from '../assets/images/icons/eligiblity.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
function EventsPage(props) {
  const { eventNum } = useParams();
  const eventDetails = details[eventNum];
  console.log(eventDetails)

  useEffect(() => {
    Aos.init({ duration: 2500 });
}, []);
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
          <div  data-aos="fade-right" className='eve-content-sub-container'>
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
                    <img src={ teamIcon}/>
                  </div>
                  <div className="event-details-text-container">
                    <p className='eve-details-desc-text'><span className='event-label'><p>Team size :</p></span> <p className='event-page-rule-info'>{eventDetails.teamsize}</p></p>
                  </div>
                </div>
                <div className="eve-details-container">
                  <div className="event-details-icon">
                  <img src={ eligiblityIcon}/>
                  </div>
                  <div className="event-details-text-container">
                    <p className='eve-details-desc-text'>Eligiblity: {eventDetails.Eligibility}</p>
                  </div>
                </div>
                <div className="eve-details-container">
                  <div className="event-details-icon">
                    <img src={ locationIcon}/>
                  </div>
                  <div className="event-details-text-container">
                    <p className='eve-details-desc-text'>Location  :{eventDetails.location}</p>
                  </div>
                </div>
                <div className="eve-details-container">
                  <div className="event-details-icon">
                    <img src={ moneyIcon}/>
                  </div>
                  <div className="event-details-text-container">
                  <p className='eve-details-desc-text'>Entry fee :{eventDetails.entryfee}</p>
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
        <div className='eve-btn-container' data-aos="fade-top">
        <div className='eve-register-btn'>
              <button>REGISTER</button>
              <button>DOWNLOAD BROCHURE</button>
              {eventDetails.link && <button >DOWNLOAD ABSTRACT</button>}
          </div>
        </div>
        <div className='eve-sub-content'>

        </div>
      </div>
    </>
  )
}

export default EventsPage
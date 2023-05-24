import React from 'react'
import Animation from '../components/animation/animation'
import Tilt from 'react-parallax-tilt';
import '../css/eventsPage.css';
import webifyPoster from '../assets/images/posters/webify copy 2.webp'
function eventsPage() {
  return (
    <div className='events-page-wrapper'>
      <div className='eve-main-container'>
        <Animation />
        <div className='eve-sub-container'>
          <div className='eve-main-heading'>
            Events
          </div>
        </div>


      </div>
      {/* <div className='eve-title'>
        OUR EVENTS
      </div> */}
      <div className='eve-content-container'>
        <div className='eve-content-text'>
          <div className='eve-content-text-heading'>
            WEBIFY
            </div>
            <div className='eve-content-text-desc'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti amet commodi ad expedita nesciunt, tempore error reiciendis! Veritatis distinctio sint ipsum dicta neque ullam tempore corporis fuga. Eum, quaerat consequuntur.
            </div>
            <div className='eve-register-btn'>
          <button>REGISTER</button>
            </div>
        </div>
        <div className='eve-content-poster'>
          <div className='eve-content-poster-image'>
          <img src={webifyPoster} />

          </div>
        </div>
      </div>

    </div>
  )
}

export default eventsPage
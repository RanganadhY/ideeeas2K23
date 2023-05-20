import React from 'react'
import Animation from '../components/animation/animation'
import '../css/eventsPage.css'
function eventsPage() {
  return (
    <div className='eve-main-container'>
      <Animation />
      <div className='eve-sub-container'>
       Events
      </div>

      <div className='eve-content'>
        list of events
      </div>
    </div>

  
  )
}

export default eventsPage
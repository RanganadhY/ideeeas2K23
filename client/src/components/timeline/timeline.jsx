import React from 'react';
import "./timeline.css"
export default function Timeline() {
  return (
    <div className="Time-container" >
  <div className="Timeline" data-aos="fade-up">
    <ul>
      <li id="trademark-border" >
        <div className="Timeline-content" >
          <h1>29-05-2023</h1>
          <h3 className='cnario-date'>IdEEEas 2k23 Curtain Raiser</h3>
          <p>The Registration Starts. The Individual or the team can register themselves to one or more events <a href='#events'>here</a>.</p>
        </div>
      </li>
      <li id="trademark-border">
        <div className="Timeline-content">
          <h1>21-06-2023</h1>
          <h3 className='cnario-date'>Last Day for Abstract Submissions</h3>
          <p>The abstract submission for the events Presentario, Aavishkar, Trademark and Ideathon will be closed after the above date. ON-SPOT REGISTRATION for other events is available. </p>
        </div>
       
      </li>
      <li id="trademark-border">
        <div className="Timeline-content">
          <h1>22-06-2023</h1>
          <h3 className='cnario-date'>Announcement of Selected Teams</h3>
          <p>Announcement of the shortlisted teams after scrutinizing their abstracts.</p>
        </div>
      </li>
      <li id="trademark-border">
        <div className="Timeline-content">
          <h1>23-06-2023</h1>
          <h3 className='cnario-date'>IdEEEas 2k23 is here!</h3>
          <p>The most awaited IDEEEAS 2k23 is here. Hope you have a wonderful learning, Best wishes from Team IEEE SIT SB.</p>
        </div>
      </li>
  

    </ul>
  </div>
</div>
  )
}

// import React from 'react'
// // import {ReactComponent as WorkIcon } from '../../assets/images/icons/pin.png'
// import timeLineElements from './timeLineData'
// import {VerticalTimeLine,VerticalTimeLineElement} from 'react-vertical-timeline-component'
// import "react-vertical-timeline-component/style.min.css"
// function Timeline() {
//     let timeIconStyle = {background: "#06D6A0"}
//   return (
//     <div>
//         <VerticalTimeLine>
//             {
//                 timeLineElements.map((element) => {
//                     return(
                        
//                         <VerticalTimeLineElement
//                             key={element.id}
//                             iconStyle = {timeIconStyle}
//                             // icon={<WorkIcon/>}
//                         >
//                              <h3 className='vertical-timeline-element-title'>{element.date}</h3>
//                             <h3 className='vertical-timeline-element-title'>{element.title}</h3>
//                            <p id='description'>{element.desc}</p>

//                         </VerticalTimeLineElement>
//                     )
//                 })
//             }
//         </VerticalTimeLine>
//     </div>
//   )
// }

// export default Timeline
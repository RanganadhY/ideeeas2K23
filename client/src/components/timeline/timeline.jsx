import React from 'react'
import './timeline.css'
// import {WorkIcon} from '../../assets/images/icons/pin.png'

// import {ReactComponent as WorkIcon } from '../../assets/images/icons/pin.png'
import timeLineElements from './timeLineData'
import {VerticalTimeline,VerticalTimelineElement} from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"
function Timeline() {
    let timeIconStyle = {background: "rgba(193, 148, 231)", innerWidth:"0.1rem",innerHeight:"1rem"}
    console.log(timeLineElements)
    timeLineElements.map((data)=>{
      console.log(data)
    })
  return (
    <div>
        <VerticalTimeline>
            {
                timeLineElements.map((element) => {
                    return(
                        
                        <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                            key={element.id}
                            iconStyle = {timeIconStyle}
                            contentStyle={{ background: 'rgba(3, 3, 3, 0.3)', color: '#ffffff',border:"#ffffff" }}
                            // icon={<WorkIcon />}
                            >
                                <div className='timeline-main-cont'>
                             <h3 className='vertical-timeline-element-title'>{element.date}</h3>
                            <h3 className='vertical-timeline-element-subtitle'>{element.title}</h3>
                           <div className='timeline-text'> 
                           {element.desc}

                           </div>
                           </div>
                        </VerticalTimelineElement>
                        
                    )
                })
            }
        </VerticalTimeline>
    </div>
  )
}

export default Timeline


// import React from 'react';
// import "./timeline.css"
// export default function Timeline() {
//   return (
//     <div className="Time-container" >
//   <div className="Timeline" data-aos="fade-up">
//     <ul>
//       <li id="trademark-border" >
//         <div className="Timeline-content" >
//           <h1>29-05-2023</h1>
//           <h3 className='cnario-date'>IdEEEas 2k23 Curtain Raiser</h3>
//           <p>The Registration Starts. The Individual or the team can register themselves to one or more events <a href='#events'>here</a>.</p>
//         </div>
//       </li>
//       <li id="trademark-border">
//         <div className="Timeline-content">
//           <h1>21-06-2023</h1>
//           <h3 className='cnario-date'>Last Day for Abstract Submissions</h3>
//           <p>The abstract submission for the events Presentario, Aavishkar, Trademark and Ideathon will be closed after the above date. ON-SPOT REGISTRATION for other events is available. </p>
//         </div>
       
//       </li>
//       <li id="trademark-border">
//         <div className="Timeline-content">
//           <h1>22-06-2023</h1>
//           <h3 className='cnario-date'>Announcement of Selected Teams</h3>
//           <p>Announcement of the shortlisted teams after scrutinizing their abstracts.</p>
//         </div>
//       </li>
//       <li id="trademark-border">
//         <div className="Timeline-content">
//           <h1>23-06-2023</h1>
//           <h3 className='cnario-date'>IdEEEas 2k23 is here!</h3>
//           <p>The most awaited IDEEEAS 2k23 is here. Hope you have a wonderful learning, Best wishes from Team IEEE SIT SB.</p>
//         </div>
//       </li>
  

//     </ul>
//   </div>
// </div>
//   )
// }


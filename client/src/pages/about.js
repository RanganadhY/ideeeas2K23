import React from 'react';
import '../css/about.css';
import img4 from "../assets/images/aboutuss/img4.jpeg"
import img5 from "../assets/images/aboutuss/img5.jpeg"
import img6 from "../assets/images/aboutuss/img6.jpeg"

const About = () => {
  

  return (
    <div className='secondpage'>
      <div className='twosections2'>
        <div className='textcontent2'>
          <h1>OUR COLLEGE</h1>
          <p className='paraieee'>Siddaganga Institute of Technology has a rich heritage of bestowing knowledge and passion to young minds. Its motto 'work is worship' is ingrained into the minds of every student, thus creating an inclusive and empowering community for students that encourages growth and achievement. The unwavering assistance from professors and administrators played a significant role in building the confidence and perspective of every individual.</p>
        </div>
        <div className='cards2'>
          
               <img alt="us" src={img4} id="img4"></img>
               <img alt="us" src={img5} id="img5"></img>
               <img alt="us" src={img6} id="img6"></img>
          
        </div>
      </div>
    </div>
  );
}

export default About;

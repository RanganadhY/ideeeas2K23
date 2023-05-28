import React from 'react';
import '../css/about.css';
import img1 from "../assets/images/aboutuss/img1.webp"
import img2 from "../assets/images/aboutuss/img2.jpg"
import img3 from "../assets/images/aboutuss/img3.JPG"

const About = () => {
  

  return (
    <div className='secondpage'>
      <div className='twosections2'>
        <div className='textcontent2'>
          <h1>OUR COLLEGE</h1>
          <p className='paraieee'>Siddaganga Institute of Technology has a rich heritage of bestowing knowledge and passion to young minds. Its motto 'work is worship' is ingrained into the minds of every student, thus creating an inclusive and empowering community for students that encourages growth and achievement. The unwavering assistance from professors and administrators played a significant role in building the confidence and perspective of every individual.</p>
        </div>
        <div className='cards2'>
          
               <img alt="us" src={img1} id="img1"></img>
               <img alt="us" src={img2} id="img2"></img>
               <img alt="us" src={img3} id="img3"></img>
          
        </div>
      </div>
    </div>
  );
}

export default About;

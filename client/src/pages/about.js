import React, { useState, useEffect } from 'react';
import '../css/about.css';

const About = () => {
  const [currentImage, setCurrentImage] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => prevImage === 2 ? 1 : prevImage + 1);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='secondpage'>
      <div className='twosections2'>
        <div className='textcontent2'>
          <h1>OUR COLLEGE</h1>
          <p className='paraieee'>Siddaganga Institute of Technology has a rich heritage of bestowing knowledge and passion to young minds. Its motto ‘work is worship’ is ingrained into the minds of every student thus creating an inclusive and empowering community for students that encourages growth and achievement. The unwavering assistance from professors and administrators played a significant role in building the confidence and perspective of every individual.</p>
        </div>
        <div className='cards2'>
          <div className="gallery2">
            <div className={`gallery__item2 gallery__item2--${currentImage}`}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

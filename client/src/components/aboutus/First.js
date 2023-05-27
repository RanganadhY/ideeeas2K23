import React, { useState, useEffect } from 'react';
import '../aboutus/First.css';

function First() {
  const [currentImage, setCurrentImage] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => prevImage === 3 ? 1 : prevImage + 1);
    }, 3000); 

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='firstpage'>
      <div className='aboutus'>
        <h1>About Us</h1>
      </div>
      <div className='twosections'>
        <div className='textcontent'>
          <h1><span>IEEE </span>SIT SB</h1>
          <p className='parieee'>IEEE SIT SB was established in the year 2002 under the inspiring leadership of Professor Basavarajaiah. The legacy was followed by the vision and direction of our mentors Dr. K V Suresh, Professor, Department of ECE and Dr. N R Sunitha, Professor, Department of CSE. Our current branch counsellors  Dr. K V Vishwanath, Professor, Department of ETE and Dr. Veena Karjagi, Associate Professor, Department of ECE  IEEE SIT SB have won a lot of laurels.
This is the only student branch from Bangalore Section to have been published in IEEE India Council Newsletter, 2019. 
IEEE SIT SB team is a force of diverse skills and expertise. The synergy of the team brings out the opportunity for every individual to explore, enhance and thereby strengthening the team.
Providing insights and opportunities of IEEE, we fervently organize various events, technical colloquiums and contests.
The WIE IEEE SIT SB, a wing under IEEE SIT SB supports all the innovation and technology of, for and by women through organizing various events.</p>
        </div>
        <div className='cards'>
          <div className="gallery">
            <div className={`gallery__item gallery__item--${currentImage}`}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default First;

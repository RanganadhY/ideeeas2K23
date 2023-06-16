import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/EventPage.css';
import bg from '../asset/bg.jpg';
import leftArrowImage from '../asset/caret-left.png';
import rightArrowImage from '../asset/caret-right.png';

const EventPage = () => {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const teamNames = ['Team A', 'Team B', 'Team C'];
  const navigate = useNavigate();

  const handlePreviousClick = () => {
    setCurrentPhoto((prevPhoto) => (prevPhoto === 0 ? 2 : prevPhoto - 1));
  };

  const handleNextClick = () => {
    setCurrentPhoto((prevPhoto) => (prevPhoto === 2 ? 0 : prevPhoto + 1));
  };

  const handleVoteClick = (teamName) => {
    console.log(`Voted for ${teamName}`);
    navigate('/Photographia-login');
  };

  const photos = [bg, bg, bg];

  return (
    <div className="fulll">
      <div className="centered-div">
        <div className="team">
          <h2>{teamNames[currentPhoto]}</h2>
        </div>
        
        <div className="image-container">
          <button className="leftb" onClick={handlePreviousClick}>
            <img src={leftArrowImage} alt="Previous" />
          </button>
          <img src={photos[currentPhoto]} alt="Team" />
          <button className="rightb" onClick={handleNextClick}>
            <img src={rightArrowImage} alt="Next" />
          </button>
        </div>
        
        <button className="voteb" onClick={() => handleVoteClick(teamNames[currentPhoto])}>
          Vote
        </button>
      </div>
    </div>
  );
}

export default EventPage;

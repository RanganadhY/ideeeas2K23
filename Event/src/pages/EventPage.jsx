import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/EventPage.css'; 


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

  const photos = [
    '../asset/squid.jpg',
    '../asset/money.jpg',
    '../asset/breaking-bad.jpg'
  ];

  return (
    <div className='fulll'>
      <div className='centered-div'>
        <div className='center-div'>
          <h2>{teamNames[currentPhoto]}</h2>
          <img src={photos[currentPhoto]} alt='Team' />
          <div className='red-div'>
        <button className="leftb" onClick={handlePreviousClick}>&lt;</button>
        <button className='rightb' onClick={handleNextClick}>&gt;</button>
      </div>
          <button className='voteb' onClick={() => handleVoteClick(teamNames[currentPhoto])}>Vote</button>
        </div>
      </div>
      
    </div>
  );
};

export default EventPage;

import React, { useState,useEffect } from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import '../css/EventPage.css';
import bg from '../asset/bg.jpg';
import leftArrowImage from '../asset/caret-left.png';
import rightArrowImage from '../asset/caret-right.png';
import axios from '../axios/axios'
import { useLocation } from 'react-router-dom';

const EventPage = (props) => {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const navigate = useNavigate();
  const {id,isEmail} = useParams();
  // console.log(isEmail,id)
  
  const handlePreviousClick = () => {
    setCurrentPhoto((prevPhoto) => (prevPhoto === 0 ?  imageDetails.length-1 : prevPhoto - 1));
  };

  const handleNextClick = () => {
    setCurrentPhoto((prevPhoto) => (prevPhoto === imageDetails.length-1 ? 0 : prevPhoto + 1));
  };

  const handleVoteClick = async(imageDetails) => {
    try{
      console.log(imageDetails)
      console.log(isEmail)
      if(!isEmail)
      {
          const user = {
            "_id":imageDetails,
            "uniqueId":id,
            "email":''
          }
        console.log(user)
        const response = await axios.post('/photographia-routes/casted-vote',user,{'content-type':'application/json'})
        console.log(response)
      }

      else
      {
        const user = {
          "_id":imageDetails,
          "uniqueId":'',
          "email":id
        }
        console.log(user)
        const response = await axios.post('/photographia-routes/casted-vote',user,{'content-type':'application/json'})
        console.log(response)
      }
    }
    catch(err){
      console.log(err)
      alert('something went wrong with voting')
    }
    

    
    // navigate('/Photographia-login');
  };


  // const photos = [bg, bg1, bg2];
  const [imageDetails,setImageDetails] = useState([])
  useEffect(()=> {
    async function getImages() {
      try{
        const response = await axios.get('/photographia-routes/display-iamge-details')
        console.log(response.data)
        await setImageDetails(response.data.details)
        console.log(imageDetails)
      }
      catch(err){
        console.log(err)
        alert('something went wrong with fetching images')
      }
    }
    getImages()
  },[])

  return (
    <div className="fulll">
      {
        (imageDetails.length>0)?
        <div className="centered-div">
          <div className="team">
            <h2>{imageDetails[currentPhoto].name}</h2>
            {/* <h2>{imageDetails}</h2> */}
          </div>
          
          <div className="image-container">
            <button className="leftb" onClick={handlePreviousClick}>
              <img src={leftArrowImage} alt="Previous" />
            </button>
            <img className='image-main'src={imageDetails[currentPhoto].photo} alt="Team" />
            <button className="rightb" onClick={handleNextClick}>
              <img src={rightArrowImage} alt="Next" />
            </button>
          </div>
          
          <button className="voteb" onClick={() => handleVoteClick(imageDetails[currentPhoto]._id)}>
            Vote
          </button>
        </div>
        :
        <></>
      }
    </div>
  );
}

export default EventPage;

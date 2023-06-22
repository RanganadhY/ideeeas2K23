import React, { useState,useEffect } from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import '../css/EventPage.css';
import { IoIosArrowBack,IoIosArrowForward  } from 'react-icons/io'
import bg from '../asset/bg.jpg';
import leftArrowImage from '../asset/caret-left.png';
import rightArrowImage from '../asset/caret-right.png';
import axios from '../axios/axios'
import { useLocation } from 'react-router-dom';

const EventPage = (props) => {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [isVoted, setisVoted] = useState()
  const navigate = useNavigate();
  const {id,isEmail} = useParams();
  console.log(isEmail,id)
  
  const handlePreviousClick = () => {
    setCurrentPhoto((prevPhoto) => (prevPhoto === 0 ?  imageDetails.length-1 : prevPhoto - 1));
  };

  const handleNextClick = () => {
    setCurrentPhoto((prevPhoto) => (prevPhoto === imageDetails.length-1 ? 0 : prevPhoto + 1));
  };

  const handleVoteClick = async(imageDetails) => {
    try{
      let votingDetails = {}
      console.log(isEmail)
      if(isEmail)
      {
        console.log("1")
          votingDetails = {
            "imageId":imageDetails,
            "userId":id,
            "isEmail":isEmail
          }
      }
      else{
        console.log("2")
        votingDetails = {
          "imageId":imageDetails,
          "userId":id,
          "isEmail":isEmail
        }
      }
      console.log(votingDetails)
      const response = await axios.post('/photographia-routes/casted-vote',votingDetails,
        {
          'content-type':'application/json'
        }
        )
      console.log(response)
      alert('Vote casted successfully')
      navigate('/Photographia-login');
    }
    catch(err){
      console.log(err)
      alert('something went wrong with voting')
    }
  };


  // const photos = [bg, bg1, bg2];
  const [imageDetails,setImageDetails] = useState([])
  useEffect(()=> {
    async function getImages() {
      try{
        const response = await axios.get('/photographia-routes/display-iamge-details')
        console.log(response.data)
        await setImageDetails(response.data.details)
      }
      catch(err){
        console.log(err)
        alert('something went wrong with fetching images')
      }
    }
    getImages()
  },[])


  useEffect(()=>{
    async function checkTheVotingStatus(){
      const response = await axios.get(`/photographia-routes/isVoted/${id}/${isEmail}`)
      setisVoted(response.data.hasVoted)
    }
    checkTheVotingStatus()
  },[])

  return (
    <>
        {
          (isVoted === false)?
          <div className="fulll">
          {
            (imageDetails.length>0)?
            <div className="centered-div">
              <div className="team">
                <h2>Participant Name</h2>
                <h3>{imageDetails[currentPhoto].name}</h3>
              </div>

              <div className="image-container">
                <div className="leftb" >
                <IoIosArrowBack onClick={handlePreviousClick}/> 
                </div>
              
                <img className='image-main'src={imageDetails[currentPhoto].photo} alt="Team" />
                <div className="rightb" >
                <IoIosArrowForward onClick={handleNextClick}/> 
                </div>
                {/* <button className="rightb" onClick={handleNextClick}>
                  <img src={rightArrowImage} alt="Next" />
                </button> */}
              </div>
              
              <button className="voteb" onClick={() => handleVoteClick(imageDetails[currentPhoto]._id)}>
                Vote
              </button>
            </div>
            :
            <>
            </>
          }
          </div>
          :
          <>
            <h2 className="voted-warning">You have already Voted</h2>
          </>
        }

    </>
    
  );
      }
export default EventPage;

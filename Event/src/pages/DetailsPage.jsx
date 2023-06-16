import React, { useState } from "react";
import "../css/DetailPage.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from '../axios/axios'
function DetailsPage(props) {
  const {uniqueId} = useParams();
  const [name, setName] = useState("");
  const [usn, setUsn] = useState("");
  const navigate = useNavigate();
  const handleClick = async (e) => {
    
    console.log("Name:", name);
    console.log("USN:", usn);
    // Perform login logic here
    // Redirect to another page
    try{
      const user = {
        "EventName":"photographia",
        "name":name,
        "uniqueId":uniqueId,
        "usn":usn,
        "email":""
      }
      console.log(user)
      const response = await axios.post('triveeea-routes/add-student-details',user,{'content-type':'application/json'})
      console.log(response)
      alert('Student saved successfully')
      navigate("/EventPage", { state: {} });
    }
    catch(err){
      console.log(err)
      alert('error in updating the details')
    }
   
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleUsnChange = (e) => {
    setUsn(e.target.value);
  };

  return (
    <div className="details">
      <div className="centered-container">
        <div className="enter">
          <h1>Enter NAME and USN</h1>
        </div>
        <div className="name-container">
          <label htmlFor="name">NAME</label>
          <input type="text" id="name" value={name} onChange={handleNameChange} />
        </div>
        <div className="usn-container">
          <label htmlFor="usn">USN</label>
          <input type="text" id="usn" value={usn} onChange={handleUsnChange} />
        </div>
        <div className="uniquebutton">
          <button onClick={handleClick}>Login</button>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;

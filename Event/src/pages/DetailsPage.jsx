import React, { useState } from "react";
import "../css/DetailPage.css";
import { useNavigate } from "react-router-dom";

function DetailsPage() {
  const [name, setName] = useState("");
  const [usn, setUsn] = useState("");
  const navigate = useNavigate();
  const handleClick = async (e) => {
    
    console.log("Name:", name);
    console.log("USN:", usn);
    // Perform login logic here
    // Redirect to another page
    navigate("/EventPage", { state: {} });
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

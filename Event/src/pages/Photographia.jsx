import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/photography.css";

function Photographia() {
  const [selectedType, setSelectedType] = useState();

  const handleRadioChange = (e) => {
    setSelectedType(e.target.value);
    console.log("Radio selected:", e.target.value);
  };

  return (
    <div className="centered-wrapper">
      <div className="container">
        <div className="loginviaa">
          <h1>LOGIN VIA</h1>
        </div>
        <div className="radiobuttons">
          <div className="radio-optionu">
            <input
              type="radio"
              name="loginType"
              value="uniqueId"
              onChange={handleRadioChange}
            />
            <label htmlFor="loginType">Unique Id</label>
          </div>
          <div className="radio-option">
            <input
              type="radio"
              name="loginType"
              value="email"
              onChange={handleRadioChange}
            />
            <label htmlFor="loginType">Email Id</label>
          </div>
        </div>

        <div className="login-container">
          {selectedType === "uniqueId" && <UniqueIdLogin />}
          {selectedType === "email" && <EmailLogin />}
        </div>
      </div>
    </div>
  );
}

function UniqueIdLogin() {
  const navigate = useNavigate();
  const [uniqueId, setUniqueId] = useState("");

  const handleClick = async (e) => {
    console.log("Unique ID:", uniqueId);
    navigate("/DetailsPage", { state: {} });
  };

  const handleUniqueIdChange = (e) => {
    setUniqueId(e.target.value);
  };

  return (
    <>
      <div className="input-container">
        <label htmlFor="">Unique id</label>
        <input type="text" value={uniqueId} onChange={handleUniqueIdChange} />
      </div>
      <div className="button-container">
        <button onClick={handleClick}>Login</button>
      </div>
    </>
  );
}

function EmailLogin() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleClick = async (e) => {
    console.log("Name:", name);
    console.log("Email ID:", email);
    navigate("/EventPage", { state: {} });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <div className="input-container">
        <label htmlFor="">Email id</label>
        <input type="text" value={email} onChange={handleEmailChange} />
      </div>
      <div className="input-container">
        <label htmlFor="">Name</label>
        <input type="text" value={name} onChange={handleNameChange} />
      </div>
      <div className="button-container">
        <button onClick={handleClick}>Login</button>
      </div>
    </>
  );
}

export default Photographia;

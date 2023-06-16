import React, { useState } from "react";
import "../css/TriveeeaLogin.css";
import { useNavigate } from "react-router-dom";

function TriveeeaLogin() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [usn, setUsn] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleUsnChange = (e) => {
    setUsn(e.target.value);
  };

  const handleClick = async (e) => {
    console.log("Name:", name);
    console.log("USN:", usn);
    navigate("/Triveeea", { state: {} });
  };

  return (
    <>
      <div className="tdetails">
        <div className="wraptriv">
          <div className="nameusn">
            <h1>Enter NAME and USN</h1>
          </div>
          <div className="tname-container">
            <label htmlFor="">Name</label>
            <input type="text" value={name} onChange={handleNameChange} />
          </div>
          <div className="tusn-container">
            <label htmlFor="">USN</label>
            <input type="text" value={usn} onChange={handleUsnChange} />
          </div>
          <div className="tuniquebutton">
            <button onClick={handleClick}>Login</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TriveeeaLogin;

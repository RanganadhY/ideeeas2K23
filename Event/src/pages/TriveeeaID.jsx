import React, { useState } from "react";
import "../css/TriveeeaID.css";
import { useNavigate } from "react-router-dom";

function TriveeeaID() {
  const [selectedType, setSelectedType] = useState();
  const [uniqueId, setUniqueId] = useState("");
  const navigate = useNavigate();

  const handleRadioChange = (e) => {
    setSelectedType(e.target.value);
    console.log("Radio selected:", e.target.value);
  };

  const handleUniqueIdChange = (e) => {
    setUniqueId(e.target.value);
  };

  const handleClick = async (e) => {
    console.log("Unique ID:", uniqueId);
    navigate("/TriveeeaLogin", { state: {} });
  };

  return (
    <div className="tfullpage">
      <div className="triveeea-id-container">
        <div className="tradio-option">
          <label htmlFor="tloginType">Unique Id</label>
          <input
            type="radio"
            name="tloginType"
            value="TuniqueId"
            onChange={handleRadioChange}
          />
        </div>
        <div className="tlogin-container">
          {selectedType === "TuniqueId" && (
            <>
              <div className="tinput-container">
                <input type="ttext" value={uniqueId} onChange={handleUniqueIdChange} />
              </div>
              <div className="tbutton-container">
                <button onClick={handleClick}>Login</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default TriveeeaID;

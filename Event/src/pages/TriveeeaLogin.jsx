import React, { useState } from "react";
import "../css/TriveeeaLogin.css";
import { useNavigate } from "react-router-dom";
import axios from '../axios/axios'
function TriveeeaID() {

  const [uniqueId, setUniqueId] = useState("");
  const navigate = useNavigate();

  const handleUniqueIdChange = (e) => {
    setUniqueId(e.target.value);
  };

  const handleClick = async (e) => {
    console.log("Unique ID:", uniqueId);
    try{
      const user = {
        "userUniqueId":uniqueId,
        "EventName":"triveeea"
      }
      console.log(user)
      const response = await axios.post('/triveeea-routes/validate-user',user,{'content-type':'application/json'})
      console.log(response)
      navigate(`/triveeea-details/${uniqueId}`);
    }
    catch(err){
      console.log(err)
      alert('404:Unique ID not found')
    }
  };

  return (
    <div className="tfullpage">
      <div className="triveeea-id-container">
        <div className="tlogin-container">
          <div className="tinput-container">
            <label htmlFor="">Unique Id</label>
            <input type="ttext" value={uniqueId} onChange={handleUniqueIdChange} />
          </div>
          <div className="tbutton-container">
            <button onClick={handleClick}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TriveeeaID;

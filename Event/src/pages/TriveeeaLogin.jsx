import React, { useState } from "react";
import "../css/TriveeeaLogin.css";
import { useNavigate , useParams} from "react-router-dom";
import axios from'../axios/axios'
function TriveeeaLogin() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [usn, setUsn] = useState("");
  const {uniqueId} = useParams();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleUsnChange = (e) => {
    setUsn(e.target.value);
  };

  const handleClick = async (e) => {
    console.log("Name:", name);
    console.log("USN:", usn);

try{
      const user = {
        "EventName":"triveeea",
        "name":name,
        "uniqueId":uniqueId,
        "usn":usn,
      }
      console.log(user)
      const response = await axios.post('triveeea-routes/add-student-details',user,{'content-type':'application/json'})
      console.log(response)
      alert('Student saved successfully')
      navigate(`/EventPage`,{uniqueId:uniqueId,email:''}, { state: {} });
    }
    catch(err){
      console.log(err)
      alert('error in updating the details')
    }  };

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

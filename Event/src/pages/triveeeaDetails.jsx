import React from "react";
import "../css/TriveeeaDetails.css";
import axios from "../axios/axios"
import { useParams } from "react-router-dom";

function TriveeeaLogin() {
  const {id} = useParams();

  const handleClick = async (e) => {
    try{
      var date = new Date()
      var timeStamp = date.getTime()
      const response = await axios.post("/triveeea-routes/buzzer-save",{
        "uniqueId":id,
        "timeStamp": timeStamp
      });
      if(response.status === 200){
        if(response.data.message === "successfull"){
          alert("buzzer clicked");
        }else{
          alert("buzzer disabled");
        }
      }
    }catch(e){
      console.log(e);
      alert("Something went wrong");
    }
  };

  return (
    <>
      <div className="tdetails">
        <button onClick={handleClick}>Buzzer</button>
      </div>
    </>
  );
}

export default TriveeeaLogin;

import React from 'react'
import axios from "../axios/axios"
function TriveeeaAdmin() {

    const handleSubmit= async(e)=>{
        e.preventDefault();
        const response = await axios.get("/triveeea-routes/change-status")
        console.log(response);
        if(response.status === 200){
            alert(response.data.status + " successfully");
        }else{
            alert("something went wrong");
        }
    }

    return (
        <>
            <div className="ta-main-container">
                <button onClick={handleSubmit}>Enable / Disable</button>
            </div>
        </>
    )
}

export default TriveeeaAdmin
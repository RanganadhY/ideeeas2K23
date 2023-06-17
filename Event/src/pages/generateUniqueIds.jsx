import React, { useState } from 'react'
import '../css/generateUniqueIds.css'
import axios from '../axios/axios'
function GenerateUniqueIds() {
    const [eventName, setEventName] = useState('')
    const [noOfUniqueIds, setNoOfUniqueIds] = useState('')

    const handleEventChange = async(e) => {
        e.preventDefault();
       await setEventName(e.target.value)
        console.log(eventName)
    }

    const handleUniqueIdChange = async(e) => {
        e.preventDefault();
        await setNoOfUniqueIds(e.target.value)
        console.log(noOfUniqueIds)
    }

    const handleClickSUbmit = async(e) => {
        e.preventDefault();
        try{
            const adminData = {
                "EventName":eventName,
                "NoOfUniqueIds":noOfUniqueIds
            }
            console.log(adminData)
            const response = axios.post('/triveeea-routes/generate-unique-ids',adminData,{'content-type':'application/json'})
        }
        catch(err){
            console.log(err);
            alert('Something went wrong in upoading the admin data')
        }
    }
    return (
        <div className='unique-ids-container'>
            <form >
            <h1>Select the event name</h1>
            
                <div className='sub-container'>
                    <label >Triveeea
                    <input type='radio'
                        name='eventName'
                        value='triveeea'
                        checked={eventName === 'triveeea'}
                        onChange={handleEventChange}
                    />
                    </label>
                </div>

                <div className='sub-container'>
                    <label >Photographia
                    <input type='radio'
                        name='eventName'
                        value='photographia'
                        checked={eventName === 'photographia'}
                        onChange={handleEventChange}
                    />
                    </label>
                </div>
                <div className='sub-container-2'>
                    <label htmlFor='number'>Enter the Number of unique ids to be generated</label>
                    <input type='number'
                        name='noOfUniqueIds'
                        
                        onChange={handleUniqueIdChange}
                    />
                </div>
                <button type='submit' onClick={handleClickSUbmit} >Submit</button>
            </form>
        </div>
    )
}

export default GenerateUniqueIds
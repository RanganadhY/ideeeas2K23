import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/photography.css";
import axios from "../axios/axios";
import validator from 'validator'
import {  Formik, Form, Field ,ErrorMessage} from 'formik'
import * as Yup from 'yup'
// import address from 'address';


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
          {/* <div className="radio-optionu">
            <input
              type="radio"
              name="loginType"
              value="uniqueId"
              onChange={handleRadioChange}
            />
            <label htmlFor="loginType">Unique Id</label>
          </div> */}
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
    e.preventDefault();
    console.log("Unique ID:", uniqueId);
    const user = {
      "uniqueId":uniqueId,
      "EventName":"photographia"
    }
    console.log(user)
    try{
      const response = await axios.post('/triveeea-routes/validate-user',user,{headers:{'Content-Type': 'application/json'}})
      console.log(response)
      console.log(response.data.uniqueIdDetails.isUniqueIdFound)
      console.log(response.data.uniqueIdDetails.isUserDetailsUpdated)

      if(response.data.uniqueIdDetails.isUniqueIdFound && response.data.uniqueIdDetails.isUserDetailsUpdated)
        navigate(`/photographia-event/${uniqueId}/${false}`);

      else if(response.data.uniqueIdDetails.isUniqueIdFound && !(response.data.uniqueIdDetails.isUserDetailsUpdated))
        navigate(`/DetailsPage/${uniqueId}/${false}`);

      else 
      alert('404: Unique Id not found')

    }
    catch(err){
      if(err)
      alert('404: Unique Id not found')
    }

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
  const [ip,setIP] = useState('');
    
    //creating function to load ip address from the API
    const getIpData = async()=>{
        const res = await axios.get('https://geolocation-db.com/json/')
        console.log(res.data);
        // setIP(res.data.IPv4)
        return res.data.IPv4
    }

  
  const initialValues = {
    name: '',
    email: '',
    EventName:'photographia',
    uniqueId:'',
}

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string()
      .matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, 'Invalid email')
      .required('Required'),

})
const onSubmit = async (values) => {
  console.log('form values', values)
  try
    {
      const ipAddress = await getIpData()
      let user = values
      user['ipAddress'] = ipAddress;
      console.log(user)
      const response = await axios.post('/triveeea-routes/add-student-details',user,{headers:{'Content-Type':'application/json'}})
      console.log(response.status)
      navigate(`/photographia-event/${values.email}/${true}`);
      

    }
    catch(err){
      if(err.response.status === 403)
      alert('403: User already exists')
    }
}
  return (
    <>
    <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
    <Form>
      <div className="input-container">
        
        <label htmlFor="email">Email id</label>
        <Field type="text"
        // value={email}
        id='email'
        name='email' 
        // onChange={handleEmailChange} 
        />
         <ErrorMessage name='email'/>
      </div>
      <div className="input-container">
        <label htmlFor="name">Name</label>
        <Field type="text" 
        // value={name}
        id='name'
        name='name'
        //  onChange={handleNameChange} 
         />
        <ErrorMessage name='name'/>
      </div>
      <div className="button-container">
        <button type='submit'
        // onClick={handleClick}
        >
          Login</button>
      </div>
      </Form>
      </Formik>
    </>
  );
}

export default Photographia;

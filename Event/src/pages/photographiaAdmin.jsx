import React from 'react'
import '../css/photographiaAdmin.css'
import {Formik , Form, Field, ErrorMessage} from 'formik'
import * as  Yup from 'yup'
import axios from '../axios/axios'
function photographiaAdmin() {
    const initialValues = {
        name: '',
        photographiaImg:'',

    }
    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
    })
      const onSubmit = async (values) => {
        console.log('form values', values)
        const formData = new FormData()
        formData.append("name",values.name)
        formData.append("photographiaImg",values.photographiaImg)
        
        
        try{
            const user = values;
            console.log(user)
            console.log('try block')
            const response = await axios.post('/photographia-routes/upload-image',formData,{headers:{'Content-Type':'multipart/form-data'}})
            console.log(response.status)
            alert('Details uploaded successfully')
        }
        catch(err){
            console.log(err)
            alert('500:error in uploading ')
        }
      }
  return (
   <div className='photo-admin-main-wrapper'>
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {
                formik=>{
                    return(
                        <Form encType="multipart/form-data">
                            <div className='photo-sub-container-wrapper'>
                            <label htmlFor='name'>Name</label>
                            <Field type='text' id='name' name='name'/>
                            
                            <ErrorMessage name='name'/>

                            <label htmlFor='file'>Upload File</label>
                            <input
                                type='file' 
                                id='file' 
                                name='photographiaImg' 
                                accept='.jpg,.png,.jpeg'
                                onChange={(e)=>formik.setFieldValue("photographiaImg",e.currentTarget.files[0])}
                            />

                            <button type='submit'>Submit</button>
                            </div>
                        </Form>
                    )                
                }
            }
            
           
        </Formik>
        </div>
  )
}

export default photographiaAdmin
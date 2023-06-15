import React from 'react'
import {Formik , Form} from 'formik'
import * as  Yup from 'yup'
function photographiaAdmin() {
    const initialValues = {
        name: '',
        photo:''

    }
    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        
      
      })
      const onSubmit = async (values) => {
        console.log('form values', values)
      }
  return (
    <div>
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        >
            <label htmlFor='name'>Name</label>
            <Field type='text' id='name' name='name'></Field>
        </Formik>
    </div>
  )
}

export default photographiaAdmin
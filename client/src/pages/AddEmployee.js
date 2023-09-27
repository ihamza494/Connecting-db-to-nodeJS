import React from 'react'
import {Form, Formik, Field} from 'formik';
import axios from 'axios';
import * as Yup from 'yup'; 

function AddEmployee() {
    const initialValues = {
        title:"",
        designation:"",
        level:""
    };

    const validationSchema = Yup.object().shape({
        title:Yup.string().required(),
        designation:Yup.string().required(),
        level:Yup.string().required(),
    })

    const onSubmit =(object)=>{
        axios.post("http://localhost:3030/EmpData", object).then(()=>{
            console.log("WORKED");
        })
    }


  return (
    <div className='addEmployeePage'>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            <Form className='formContainer'>
                <label>Title:</label>
                <Field id="addEmployee" name="title" placeholder="(Example: Hamza Iqbal...)"/>
                <label>Designation:</label>
                <Field id="addEmployee" name="designation" placeholder="(Example: Manager...)"/>
                <label>Level:</label>
                <Field id="addEmployee" name="level" placeholder="(Example: Three...)"/>

                <button type='submit'>Add Employee</button>
            </Form>
        </Formik>
      
    </div>
  )
}

export default AddEmployee

import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

function Home() {
  const [employeeData, setEmployeeData] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:3030/EmpData").then((response)=>{
      setEmployeeData(response.data);
      console.log(response.data);
    })
  }, []);

  return (
    <div className='container'>
      {employeeData.map((emp, index)=>{
        return<div className='post'>
          <div className='title'>{emp.title}</div>
          <div className='designation'>{emp.designation}</div>
          <div className='level'><h5>Level </h5>{emp.level}</div>
          </div>
      })}
      
    </div>
  )
}

export default Home

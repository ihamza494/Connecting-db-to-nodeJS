import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


function Employee() {
    let { id } = useParams();
    const [ emp,  setEmp] = useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:3030/EmpData/byId/${id}`).then((response)=>{
            setEmp(response.data);
            console.log(response.data);
        });
    }, []);

  return (
    <div className='empDetailPage'>
           <div className='leftSide'>
                <div className='post' id='individual'>
                    <div className='title'>{emp.title}</div>
                    <div className='body'>{emp.designation}</div>
                    <div className='footer'>{emp.level}</div>
                </div>
            </div>
            <div className='rightSide'>
                Review Section
            </div>
    </div>
  )
}

export default Employee

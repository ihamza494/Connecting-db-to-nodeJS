import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


function Employee() {
    let { id } = useParams();
    const [ emp,  setEmp] = useState([]);
    const [ listofReviews, setListOfReviews] = useState([]);
    const [newReview, setNewReview] = useState("");
    useEffect(()=>{
        axios.get(`http://localhost:3030/EmpData/byId/${id}`).then((response)=>{
            setEmp(response.data);
            console.log(response.data);
        });
        axios.get(`http://localhost:3030/reviews/${id}`).then((response)=>{
            setListOfReviews(response.data);
            console.log(response.data);
        });
    }, []);

    const addReview=()=>{
        axios.post(`http://localhost:3030/reviews`, { reviewBody: newReview, EmployeeDatumId: id}).then((response)=>{
            console.log('Added successfully: ' + JSON.stringify(response));
            const reviewToAdd = {reviewBody: newReview};
            setListOfReviews([...listofReviews, reviewToAdd]);
            setNewReview("");
        })
    }

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
            <div className='addReviewCOntainer'>
                    <input type='text' placeholder='Review...' autoComplete='off' value={newReview} onChange={(event)=>{setNewReview(event.target.value)}}/>
                    <button onClick={addReview}>Add Review</button>
                </div>
            <div className='listOfReviews'>
                
                {listofReviews.map((review)=>{
                    return <div className='review'>{review.reviewBody}</div>
                })}
            </div>
            </div>
    </div>
  )
}

export default Employee

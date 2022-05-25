import React, { useState } from 'react';
import { useEffect } from 'react';
import Review from './Review';


const Reviews = () => {
    const [review, setReview] = useState([]);
    const [status, setStatus] =useState(false);
    let reviews = review.slice(0,6);
    const extraReviews = review.slice(6, review.length);


    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(data => data.json())
            .then(res => setReview(res))
    }, [])
    return (
        <div className='text-center'>
            <h1 className='text-4xl text-primary font-bold m-32'>My Happy Customers Review</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 lg:mx-40's>
            {
                reviews.map(review => <Review key={review._id} oneReview={review}></Review>)
            }
            {status&&extraReviews.map(review => <Review key={review._id} oneReview={review}></Review>)}
            </div>
            <button className='btn btn-accent my-5' onClick={()=>setStatus(!status)}>{
                status?"See Less":"See More Reviews"
            }</button>
        </div>
    );

};

export default Reviews;
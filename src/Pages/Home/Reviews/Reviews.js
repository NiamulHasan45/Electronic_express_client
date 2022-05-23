import React, { useState } from 'react';
import { useEffect } from 'react';
import Review from './Review';


const Reviews = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('review.json')
            .then(data => data.json())
            .then(res => setReview(res))
    }, [])
    return (
        <div className='text-center'>
            <h1 className='text-4xl text-primary font-bold m-32'>My Happy Customers Review</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 lg:mx-40's>
            {
                review.map(review => <Review key={review.id} oneReview={review}></Review>)
            }
            </div>
        </div>
    );

};

export default Reviews;
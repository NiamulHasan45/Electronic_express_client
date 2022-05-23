import React from 'react';


const Review = (props) => {
   const {name, comment, rating} = props.oneReview;
    return (
        <div className='m-5 p-10 border-2 rounded-lg'>
            <h4 className='text-2xl'>Name: {name}</h4>
            <p><small>Comment: {comment}</small></p>
            <h4 className='font-bold text-secondary'>Rating: <span className='text-red'>{rating}</span></h4>
        </div>
    );
};

export default Review;
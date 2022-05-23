import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../../../SharedComponents/PrimaryButton';


const Part = ({ part }) => {
    const navigate = useNavigate();

    const navigateToItem = id => {
        navigate(`/onepart/${id}`);
    }
    const [readMore, setReadMore] = useState(false);
    const extraContent = part.description.substring(60, part.description.length);
    const linkName = readMore ? 'Read Less... ' : 'Read More... '

    return (
        <div className='rounded-lg bg-slate-100 m-3 p-3'>
            <div className='w-1/2 my-3 mx-auto p-3 h-30 text-center '>
                <img src={part.img} alt="" />
            </div>
            <h3 className='text-2xl font-bold text-primary'>{part.name}</h3>
            <p className='m-2'><span className='text-primary font-semibold'>Description:</span> {part.description.substring(0, 60)}
                {readMore && extraContent}
                <a className="read-more-link" onClick={() => { setReadMore(!readMore) }}><h2 className='font-semibold'>{linkName}</h2></a></p>
            <h2 className='text-2xl'>Available Products: {part.available}</h2>
            <h4 className='m-3'>Minimum Order Quantity: {part.quantity}</h4>
            <PrimaryButton onClick={() => navigateToItem(_id)}>Buy Now</PrimaryButton>
        </div>
    );
};

export default Part;
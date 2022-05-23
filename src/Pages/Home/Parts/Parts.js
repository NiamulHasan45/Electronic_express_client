import React, { useEffect, useState } from 'react';
import Part from '../Part/Part';


const Parts = () => {
    const [parts, setParts] =useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/parts')
        .then(res=>res.json())
        .then(data =>setParts(data))
    },[])
    return (
        <div>
            <h1 className='text-4xl text-primary font-bold  m-32'>Available parts</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 lg:mx-40'>
                {
                    parts.map(part =><Part part={part}></Part>)
                }
            </div>
        </div>
    );
};

export default Parts;
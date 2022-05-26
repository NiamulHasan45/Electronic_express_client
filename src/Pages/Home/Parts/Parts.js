import React, { useEffect, useState } from 'react';
import Part from '../Part/Part';


const Parts = () => {
    const [parts, setParts] = useState([])
    const [status, setStatus] = useState(false);
    let mainParts = parts.slice(0, 6);
    const extraParts = parts.slice(6, parts.length);


    useEffect(() => {
        fetch('https://powerful-mountain-90746.herokuapp.com/parts')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])
    return (
        <div id="parts">
            <h1 className='text-4xl text-primary font-bold  m-32'>Available parts</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 lg:mx-40'>
                {
                    mainParts.map(part => <Part part={part}></Part>)
                }
                {status && extraParts.map(part => <Part part={part}></Part>)}
            </div>
            <button className='btn btn-accent my-5' onClick={() => setStatus(!status)}>{
                status ? "See Less" : "See More Parts"
            }</button>
        </div>
        
    );
};

export default Parts;
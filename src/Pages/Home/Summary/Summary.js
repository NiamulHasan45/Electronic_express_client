import React from 'react';
import s1 from '../../../assets/s1.png'
import s2 from '../../../assets/s2.png'
import s3 from '../../../assets/s3.png'
import s4 from '../../../assets/s4.png'

const Summary = () => {
    return (
        <div>
            <h1 className='text-4xl text-primary font-bold m-20'>Millions Customers Like Us</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:mx-40'>
                <div className='flex flex-col'>
                    <div className='mx-auto h-48'>
                    <img src={s1} alt="" />
                    </div>
                    <div>
                    <h2 className='text-primary text-4xl m-2 font-semibold'>10000+</h2>
                    <h4 className='text-2xl'>Products Order</h4>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='mx-auto h-48'>
                    <img src={s2} alt="" />
                    </div>
                    <div>
                    <h2 className='text-primary text-4xl m-2 font-semibold'>90+</h2>
                    <h4 className='text-2xl'>Happy Customers</h4>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='mx-auto h-48'>
                    <img src={s3} alt="" />
                    </div>
                    <div>
                    <h2 className='text-primary text-4xl m-2 font-semibold'>10+</h2>
                    <h4 className='text-2xl'>Countries</h4>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='mx-auto h-48'>
                    <img src={s4} alt="" />
                    </div>
                    <div>
                    <h2 className='text-primary text-4xl m-2 font-semibold'>1000+</h2>
                    <h4 className='text-2xl'>Feedbacks</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Summary;
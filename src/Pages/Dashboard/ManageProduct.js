import React, { useEffect, useState } from 'react';
import './ManageProduct.css'

const ManageProduct = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/parts')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])


    const handleDelete = id => {

        const url = `http://localhost:5000/onepart/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())

            .then(data => {
                console.log(data);
                const remaining = items.filter(item => item._id !== id);
                setItems(remaining);
            })

    }
    console.log(items);

    return (
        <div className='inventory'>
            <h1 className='my-3 text-3xl text-bold text-primary'>Welcome</h1>
            <h2 className='mt-5 text-2xl text-semibold text-secondary'>Detailed information of the Parts.</h2>

            <div className='manage-one-product'>
                {
                    items.map(item => <div key={item._id} className='one-product p-3 my-5 mx-auto'>

                        <div className='demo-image'>
                            <img className='w-100' src={item.img} alt="" />
                        </div>

                        <div className='one-information'>
                            <div>
                                <h2 className='text-2xl font-semibold m-3'>{item.name}</h2>
                                <h3 className=' text-2xl text-primary'>Price: {item.price}</h3>
                                <p>Available Quantity: {item.available}</p>
                            </div>
                            <label for="my-modal" class="btn modal-button">Delete</label>




                            <input type="checkbox" id="my-modal" class="modal-toggle" />
                            <div class="modal">
                                <div class="modal-box">
                                    <label for="my-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                    <h3 class="font-bold text-lg">Are you sure!</h3>
                                    <p class="py-4">If You are sure, please click here!</p>
                                    <div class="modal-action">
                                        <button onClick={() => handleDelete(item._id)} className='service-button btn btn-accent d-block mx-auto'>Delete</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default ManageProduct;
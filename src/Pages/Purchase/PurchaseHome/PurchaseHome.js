import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import toast, { Toaster } from 'react-hot-toast';


const PurchaseHome = () => {
    const { id } = useParams();
    const [user] = useAuthState(auth);
    const [remaining, setRemainig] = useState(0);

    const [product, setProduct] = useState({});
    const [error, setError] = useState('');

    useEffect(() => {
        fetch(`http://localhost:5000/onepart/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [remaining])

    const handleBooking = event => {
        event.preventDefault();
        let unit = parseInt(event.target.quantity.value);
        let minQuantity = parseInt(product.quantity)
        let avail = parseInt(product.available);

        // >= minQuantity && unit <= avail

        if (unit >= minQuantity && unit <= avail) {
            console.log("sucess");
            setError("");
            const booking = {
                bookingId: id,
                productName: product.name,
                userEmail: user.email,
                userName: user.displayName,
                userPhone: event.target.phone.value,
                userAddress: event.target.address.value,
                quantity: unit,
                price: product.price
            }

            fetch('http://localhost:5000/order', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(booking)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.success) {
                        const available = avail-unit;
                      
                        const remaining = {available};
                        const url = `http://localhost:5000/onepart/${id}`;
                        fetch(url, {
                            method: 'PUT',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(remaining)
                        })
                        .then(res => res.json())
                        .then(result => {
                            setRemainig(result);
                            console.log(result);
                        })


                        toast('Successfully placed order');
                        event.target.phone.value = '';
                        event.target.address.value = '';
                        event.target.quantity.value = '';
                    }
                    else (
                        toast('Please try again')
                    )
                })
        }
        else if (unit < minQuantity) {
            setError('Please order minimun quantity');
        }
        else (
            setError('Your order exceeded the available product')
        )

    }



    return (
        <div >

            <div class="hero min-h-screen ">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div className='lg:w-1/2 md:w-1'>
                        <div>
                            <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>

                                <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                                <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                                <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" required />
                                <input type="text" name="address" placeholder="Address" className="input input-bordered w-full max-w-xs" required />
                                <input type="number" name="quantity" placeholder={product.quantity} className="input input-bordered w-full max-w-xs" required/>

                                {
                                    error && <p className='text-red-400'>{error}</p>
                                }

                                <input type="submit" value="Order Now" className="btn btn-secondary w-full max-w-xs" />
                            </form>
                        </div>
                    </div>
                    <div className='lg:w-1/2 md:w-1'>
                        <img src={product.img} alt="" />
                        <h1 class="text-3xl font-bold">{product.name}</h1>
                        <p class="py-6">{product.description}</p>
                        <p class="py-2 text-2xl">Price-per-unit: {product.price}</p>
                        <p class="py-2 text-2xl">Available Quantity: {product.available}</p>
                        <p class="py-2 text-2xl">Minimum Order: {product.quantity}</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PurchaseHome;
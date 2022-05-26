import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';



const stripePromise = loadStripe('pk_test_51L3cIwKbnKM56TwTJNz0xrw9mIVZR7Er30MqLBBZWEjoI6zlO4zqbD7bR18pB53ktFgqeplV2xEVKYdR9nOfYKaZ00dhMqmEhw');

const Payment = () => {
    const { id } = useParams();
    const [paymentData, setPaymentData] = useState([]);
   

    useEffect(() => {
        fetch(`https://powerful-mountain-90746.herokuapp.com/order/${id}`, {
            method: 'GET',
            headers: {
                "authorization": `Bearer ${localStorage.getItem('accessToken')}`
            }
        }
        )
            .then(res => res.json())
            .then(data => setPaymentData(data))
    }, [])

    

    const price = parseInt(paymentData.quantity)*parseInt(paymentData.price);


 console.log(paymentData);

    return (
        <div>
            <div class="card mx-auto w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-success font-bold">Hello, {paymentData.userName}</p>
                    <h2 class="card-title">Pay for {paymentData.productName}</h2>
                    {console.log(paymentData)}
                    <p>Please pay: ${price}</p>
                </div>
            </div>
            <div class=" mx-auto card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm paymentData={paymentData} price={price} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;
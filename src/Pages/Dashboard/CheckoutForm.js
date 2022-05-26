import React, { useEffect, useState } from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { async } from '@firebase/util';

const CheckoutForm = (props) => {
    const {paymentData} =props;
    const {price} =props;
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const [success, setSuccess] = useState('');


    // useEffect (() => {
    //     fetch('https://powerful-mountain-90746.herokuapp.com/create-payment-intent', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json',
    //             'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    //         },
    //         body: JSON.stringify({ price })
    //     })
    //         .then(res => res.json())
    //         .then(data => { console.log(data)
    //             if (data?.clientSecret) {
    //                 setClientSecret(data.clientSecret);
    //             }
    //         });
    //   }, [price]);

    const handleSubmit = async(event) =>{
        event.preventDefault();

        if(!stripe|| !elements){
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
          return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
      
          if (error) {
            setError(error.message)
          } 
          else {
            setError('');
          }
          setSuccess('');

        //   const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
        //     clientSecret,
        //     {
        //         payment_method: {
        //             card: card,
        //             billing_details: {
        //                 name: paymentData.userName,
        //                 email: paymentData.email
        //             },
        //         },
        //     },
        // );
        // if (intentError) {
        //     setError(intentError?.message);
        // }
        // else{
        //     setError('');
        //     setSuccess('Congrats! Your payment is completed.')
        // }
    
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-secondary btn-sm' type="submit" disabled={!stripe}>
                    Pay
                </button>
                {
                    error && <p className='text-red-500'>{error}</p>
                }
                {
                    success && <p className='text-green-500'>{success}</p>
                }
            </form>
        </div>
    );
};

export default CheckoutForm;
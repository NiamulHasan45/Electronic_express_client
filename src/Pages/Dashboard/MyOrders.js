import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            fetch(`https://powerful-mountain-90746.herokuapp.com/order?userEmail=${user.email}`,{
                method: 'GET',
                headers:{
                    "authorization": `Bearer ${localStorage.getItem('accessToken')}`
                }
            } 
            )
                .then(res => {
                    if(res.status === 401 || res.status ===403){
                        navigate('/');
                    }
                    return res.json();
                })
                .then(data => {
                    setOrders(data)
                });
        }
    }, [user])

    return (
        <div>
            <h1 className='my-3 text-3xl text-bold text-primary'>Welcome to yours orders</h1>

            <div class="overflow-x-auto">
                <table class="table lg:w-full w-50 ">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((a, index) => <tr key={a._id}>
                                <th>{index + 1}</th>
                                <td>{a.userName}</td>
                                <td>{a.productName}</td>
                                <td>{a.quantity}</td>
                                <td>{a.price}</td>

                                <td>
                                    {(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}
                                    {(a.price && a.paid) && <div>
                                        <p><span className='text-success'>Paid</span></p>
                                        <p>Transaction id: <span className='text-success'>{a.transactionId}</span></p>
                                    </div>}
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;
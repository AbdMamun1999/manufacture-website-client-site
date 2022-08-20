import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import Loading from '../Loading/Loading';


const stripePromise = loadStripe('pk_test_51L3DvlJnTFMOZfncjb4R6gRbXpAmrPs8sz6fonYnNWAswvoIzgz9xwdROIqrXeTCDryWk6YLkgmC8WLbOZOzOju700WvbkcWAu');

const Payment = () => {
    const [order, setOrder] = useState({})
    const [user] = useAuthState(auth)
    const { orderId } = useParams()

    useEffect(() => {
        fetch(`https://agile-dawn-56972.herokuapp.com/order/${orderId}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [orderId])


    return (
        <div>
            <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <p className="text-success font-bold">Hello,{order?.userName}</p>
                    <h2 className="card-title">Please pay for {order?.productName}</h2>
                    <p className="font-bold">Purchase Quantity {order?.purchaseQuantity}</p>
                    <p className="font-bold">You have to pay ${order?.purchasePrice}</p>
                </div>
            </div>
            <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;
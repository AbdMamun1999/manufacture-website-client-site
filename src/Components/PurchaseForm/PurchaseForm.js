import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const PurchaseForm = ({ product }) => {
    const [user] = useAuthState(auth)
    const [quantityError, setQuantityError] = useState('')
    const { _id, name, available_quantity, minimum_quantity, price } = product;



    const handleSubmit = event => {
        event.preventDefault()
        const productName = name;
        const userName = user?.displayName;
        const email = user?.email;
        const address = event.target.address.value;
        const phone = event.target.phone.value;
        const purchaseQuantity = parseInt(event.target.quantity.value);
        const purchaseInfo = {
            productId:_id,
            productName,
            userName,
            email,
            address,
            phone,
            purchaseQuantity
        }
        if (available_quantity < purchaseQuantity) {
            setQuantityError(<p className='text-red-600'>Sorry!you ordered more than In Stack</p>)
            return;
        } else if (purchaseQuantity < minimum_quantity) {
            setQuantityError(<p className='text-red-600'>You  have to ordere more than In $`{minimum_quantity}`</p>)
            return;
        } else {
            // const { data } = axios.post(`http://localhost:5000/orders`,  purchaseInfo )
            // console.log(data)
            fetch('http://localhost:5000/orders',{
                method:'POST',
                headers:{
                    'content-type':'application/json',
                },
                body:JSON.stringify(purchaseInfo)
            })
            .then(res=>res.json())
            .then(data => {
                toast.success('Order Completed')
            })
        }
    }



    return (
        <div className="card  bg-base-100 shadow-xl">
            <div className="card-body ">
                <h2 className="card-title">Order Now</h2>
                <form
                    onSubmit={handleSubmit}
                    className='grid grid-cols-1 justify-items-center gap-4'>
                    <input
                        type="text"
                        value={`${user?.displayName}`} readOnly disabled
                        className="input input-bordered w-full max-w-xs" />
                    <input
                        type="text"
                        value={`${user?.email}`} readOnly disabled
                        className="input input-bordered w-full max-w-xs" />
                    <input
                        type="text"
                        name='phone'
                        placeholder="Phone number"
                        className="input input-bordered w-full max-w-xs" required />
                    <input
                        type="text"
                        name='address'
                        placeholder="Your Address"
                        className="input input-bordered w-full max-w-xs" required />

                    <div className="w-full max-w-xs mt-[-5]">
                        <label className="label">
                            <span className="label-text font-bold">You have to purchase minimun 2000 pices</span>
                            {quantityError}
                        </label>
                        <input
                            type="text"
                            name='quantity'
                            value={`${minimum_quantity}`}
                            className="input input-bordered w-full max-w-xs" />
                    </div>

                    <input
                        type="submit"
                        value='BUY NOW'
                        placeholder="Type here"
                        className="btn btn-primary w-full max-w-xs" />
                </form>
            </div>
        </div>
    );
};

export default PurchaseForm;
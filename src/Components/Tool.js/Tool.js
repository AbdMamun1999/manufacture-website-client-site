import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({ tool }) => {
    const { _id,name, available_quantity, minimum_quantity, price } = tool;
    const navigate = useNavigate()

    const handleNavigate = id =>{
        navigate(`/purchase/${id}`)
    }
    return (
        <div className="card  bg-base-100 shadow-xl ">
            <figure className="px-10 pt-10">
                <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-left text-left">
                <h2 className="card-title">{name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <small><p className='font-bold'>Available Quantity: {available_quantity} pices</p></small>
                <small><p className='font-bold'>Price: ${price} per unit</p></small>
                <small><p className='font-bold'>You have to order minimun {minimum_quantity} pices</p></small>
                <div className="card-actions">
                    <button
                    onClick={()=>handleNavigate(_id)}
                     className="btn btn-primary">
                         Buy Now
                         </button>
                </div>
            </div>
        </div>
    );
};

export default Tool;
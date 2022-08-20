import React from 'react';
import './Tools.css'
import { useNavigate } from 'react-router-dom';

const Tool = ({ tool }) => {
    const { _id,img, name, price } = tool;
    const navigate = useNavigate()

    const handleNavigate = id => {
        navigate(`/purchase/${id}`)
    }
    
    return (
        <div className="border-2 rounded border-primary ">
            <figure className='w-full flex justify-center parent-details-button'>
                <img src={img} alt="Shoes" className="rounded-xl w-80 h-64 object-contain my-3" />
                <div className='details-div flex justify-center items-center'>
                    <button
                    onClick={()=>handleNavigate(_id)} 
                    className='bg-primary py-3 px-5 text-white rounded details-button uppercase font-bold' 
                    type="">details</button>
                </div>
            </figure>
            <div className='px-4 pb-2'>
                <p className='text-2xl'
                    title={name}>{name.slice(0, 25) + '...'}</p>
                <p className='text-2xl font-bold'>${price}</p>
            </div>
            <div className='bg-primary text-white  w-full'>
                <button type="" className='w-full h-14'>ADD TO CART</button>
            </div>
        </div>
    );
};

export default Tool;
import React, { useEffect, useState } from 'react';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';

const ManageAllOrders = () => {
    const [allOrders,setAllOrders] = useState([])

    useEffect(()=>{
        fetch('https://agile-dawn-56972.herokuapp.com/allorders')
        .then(res=>res.json())
        .then(data=>setAllOrders(data))
    },[allOrders])

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 justify-items-center'>
            {
                allOrders.map(order=><ManageAllOrder
                key={order._id}
                order={order}
                ></ManageAllOrder>)
            }
        </div>
    );
};

export default ManageAllOrders;
import React from 'react';

const ManageAllOrder = ({ order }) => {
    const { _id, productName, purchasePrice, userName, phone, addresspa, paid, status } = order

    const handlePlaced = () => {
        fetch(`https://agile-dawn-56972.herokuapp.com/allorders/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data,'handlePlaced')
            })
    }

    return (
        <div class="card w-96 bg-base-100 shadow-xl image-full">
            <figure><img src={order.img} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{order.productName}</h2>
                <p>Customer Name:{order.userName}</p>
                <p>Customer Phone:{order.phone}</p>
                <p>Place to:{order.address} </p>
                {status ?
                    <>
                        <p>Status: {status}</p>
                        {
                            status === 'Shift' ? '' : <button
                                onClick={handlePlaced}
                                className='btn btn-sm'>
                                placed?
                            </button>
                        }
                    </>

                    :
                    <p>Status: unpaid</p>
                }
            </div>
        </div>
    );
};

export default ManageAllOrder;
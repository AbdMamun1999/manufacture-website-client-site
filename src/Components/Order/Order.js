import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DeleteConfirmModal from '../DeleteConfirmModal/DeleteConfirmModal';

const Order = ({ order, refetch }) => {
    const [deleteOrder, setDeleteOrder] = useState(false)
    const { _id, productName, purchasePrice } = order;



    const openModal = () => {
        setDeleteOrder(true)
    }
    return (
        <div className="card card-side border-2 shadow-xl">
            <figure className="px-3 py-3">
                <img src={order.img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{productName}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <p className='bold'><small>Price: ${purchasePrice}</small></p>
                <div className="card-actions">
                    {(purchasePrice && !order.paid) && <label onClick={openModal} htmlFor="delete-order-modal" className="btn btn-primary modal-button">Cencel</label>}

                    {
                        (purchasePrice && !order.paid) && <Link to={`/dashboard/payment/${_id}`}>
                            <button className="btn btn-primary">Payment</button>
                        </Link>
                    }
                    {
                        (purchasePrice && order.paid) && <>
                            <span className="text-success">Paid</span>
                            <p className='font-bold'>Your transaction id: <span className='text-primary'> {order.transactionId}</span></p>
                        </>
                    }
                </div>
            </div>
            {
                deleteOrder && <DeleteConfirmModal
                    setDeleteOrder={setDeleteOrder}
                    refetch={refetch}
                    id={_id}
                ></DeleteConfirmModal>
            }
        </div>
    );
};

export default Order;
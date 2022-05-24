import React, { useState } from 'react';
import DeleteConfirmModal from '../DeleteConfirmModal/DeleteConfirmModal';

const Order = ({ order, refetch }) => {
    const [deleteOrder, setDeleteOrder] = useState(false)
    const { _id,productName } = order;
    console.log(order)



    const openModal = () => {
        setDeleteOrder(true)
    }
    return (
        <div className="card card-side border-2 shadow-xl">
            <figure className="px-3 py-3">
                <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{productName}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                    <label onClick={openModal} htmlFor="my-modal-6" className="btn btn-primary modal-button">Cencel</label>
                    <button className="btn btn-primary">Payment</button>
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
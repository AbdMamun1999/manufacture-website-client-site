import axios from 'axios';
import React from 'react';

const DeleteConfirmModal = ({ id, setDeleteOrder, refetch }) => {


    const handleDelete = () => {
        fetch(`https://agile-dawn-56972.herokuapp.com/orders/${id}`, {
            method: 'DELETE'
        }).then(res => res.json())
            .then(data => {
                setDeleteOrder(false)
                refetch()
            })

    }

    return (<>
        <input type="checkbox" id="delete-order-modal" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-red-600 text-lg">Are you sure delete it!</h3>
                <p className="py-4"></p>
                <div className="modal-action">
                    <label onClick={handleDelete} className="btn btn-primary">OK</label>
                    <label htmlFor="delete-order-modal" className="btn btn-primary">cencle</label>
                </div>
            </div>
        </div>
    </>
    );
};

export default DeleteConfirmModal;
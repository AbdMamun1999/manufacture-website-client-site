import React from 'react';

const DeleteManageProductModal = ({ setDeleteProduct, id }) => {


    const handleDelete = () => {
        fetch(`https://agile-dawn-56972.herokuapp.com/allproducts/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
            .then(data => {
                setDeleteProduct(false)
            })

    }

    return (
        <>
            <input type="checkbox" id="manageProductDelete-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-red-600 text-lg">Are you sure delete it!</h3>
                    <p className="py-4"></p>
                    <div className="modal-action">
                        <label onClick={handleDelete} className="btn btn-primary">OK</label>
                        <label htmlFor="manageProductDelete-modal" className="btn btn-primary">cencle</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DeleteManageProductModal;
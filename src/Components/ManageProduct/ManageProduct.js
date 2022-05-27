import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DeleteManageProductModal from '../DeleteManageProductModal/DeleteManageProductModal';

const ManageProduct = ({product}) => {
    const [deleteProduct, setDeleteProduct] = useState(false)
    const { _id,img,name,brand,description,price,available_quantity } = product;



    const openModal = () => {
        setDeleteProduct(true)
    }
    return (
        <div className="card card-side border-2 shadow-xl bg-lime-300 mt-5">
        <figure className="px-3 py-3">
            <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{
                description.map((des,index)=><li key={index}>{des}</li>)
            }</p>
            <p className='bold'><small>Price: ${price}</small></p>
            <p className='bold'><small>Available quantity: ${available_quantity}</small></p>
            <div className="card-actions">
            <label onClick={openModal} htmlFor="manageProductDelete-modal" className="btn btn-primary modal-button">delete</label>

            </div>
        </div>
        {
            deleteProduct && <DeleteManageProductModal
                setDeleteProduct={setDeleteProduct}
                id={_id}
            ></DeleteManageProductModal>
        }
    </div>
    );
};

export default ManageProduct;
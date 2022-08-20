import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DeleteManageProductModal from '../DeleteManageProductModal/DeleteManageProductModal';

const ManageProduct = ({ product }) => {
    const [deleteProduct, setDeleteProduct] = useState(false)
    const { _id, img, name, brand, description, price, available_quantity } = product;



    const openModal = () => {
        setDeleteProduct(true)
    }
    return (
        <div className="grid grid-cols-4 border-2 shadow-xl bg-lime-300 mt-5">
            <div className="col-span-1">
                <img src={img} alt="Shoes" className="rounded-xl object-contain"/>
            </div>
            <div className='col-span-3 flex flex-col gap-3 px-5'>
                <h2 className="font-bold text-2xl">{name}</h2>
                <p className='font-bold'><small>Price: ${price}</small></p>
                <p className='font-bold'><small>Available quantity: ${available_quantity}</small></p>
                <div className="">
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
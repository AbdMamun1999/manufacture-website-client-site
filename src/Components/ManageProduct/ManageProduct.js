import React, { useState } from "react";
import { Link } from "react-router-dom";
import DeleteManageProductModal from "../DeleteManageProductModal/DeleteManageProductModal";

const ManageProduct = ({ product }) => {
  const [deleteProduct, setDeleteProduct] = useState(false);
  const { _id, img, name, brand, description, price, available_quantity } =
    product;

  const openModal = () => {
    setDeleteProduct(true);
  };
  return (
    <>
      <td>
        <img
          src={img}
          alt="Shoes"
          className="rounded-xl object-contain"
          width="100"
          height="100"
        />
      </td>
      <td className="text-xl">
        <p className="uppercase" title={name}>
          {name.slice(0, 50)}
        </p>
      </td>
      <th>
        <small>${price}</small>
      </th>
      <th>
        <small>{available_quantity}</small>
      </th>

      <th>
        <label
          onClick={openModal}
          htmlFor="manageProductDelete-modal"
          className="btn btn-primary modal-button"
        >
          delete
        </label>
      </th>

      {deleteProduct && (
        <DeleteManageProductModal
          setDeleteProduct={setDeleteProduct}
          id={_id}
        ></DeleteManageProductModal>
      )}
    </>
  );
};

export default ManageProduct;

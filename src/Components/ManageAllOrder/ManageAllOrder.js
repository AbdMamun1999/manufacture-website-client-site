import React from "react";

const ManageAllOrder = ({ order }) => {
  const {
    _id,
    productName,
    purchasePrice,
    userName,
    phone,
    addresspa,
    paid,
    status,
  } = order;

  const handlePlaced = () => {
    fetch(`https://manufacture-old.vercel.app/allorders/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        
      });
  };

  return (
    <>
      <td>
        <img src={order.img} alt="Shoes" width="100" height="100"/>
      </td>
      <td><p className="uppercase" title={order.productName}>{order.productName.slice(0, 30)}</p></td>
      <td>{order.userName}</td>
      <td>{order.phone}</td>
      <td><p className="uppercase">{order.address}</p> </td>
      {status ? (
        <>
          <td><p className="uppercase">{status}</p></td>
          {status === "Shift" ? (
            ""
          ) : (
            <th>
              <button onClick={handlePlaced} className="btn btn-sm">
                {" "}
                placed?
              </button>
            </th>
          )}
        </>
      ) : (
        <td>
          <p className="uppercase">unpaid</p>
        </td>
      )}
    </>
  );
};

export default ManageAllOrder;

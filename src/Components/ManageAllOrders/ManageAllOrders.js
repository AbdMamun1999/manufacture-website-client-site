import React, { useEffect, useState } from "react";
import ManageAllOrder from "../ManageAllOrder/ManageAllOrder";

const ManageAllOrders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    fetch("https://manufacture-old.vercel.app/allorders")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, [allOrders]);

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Name</th>
            <th>Customer Name</th>
            <th>Customer Phone</th>
            <th>Address</th>
            <th>status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allOrders.map((order) => (
            <tr>
              <ManageAllOrder key={order._id} order={order}></ManageAllOrder>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageAllOrders;

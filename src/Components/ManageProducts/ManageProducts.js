import React, { useEffect, useState } from 'react';
import ManageProduct from '../ManageProduct/ManageProduct';

const ManageProducts = () => {
    const [products,setProducts] = useState([])

    useEffect(()=>{
        fetch('https://agile-dawn-56972.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setProducts(data)
        })
    },[products])
    
    return (
       <div>
           {
               products.map(product => <ManageProduct
                key={product._id}
                product={product}
               ></ManageProduct>)
           }
       </div>
    );
};

export default ManageProducts;
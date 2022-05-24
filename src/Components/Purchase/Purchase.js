import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetails from '../ProductDetails/ProductDetails';
import PurchaseForm from '../PurchaseForm/PurchaseForm';

const Purchase = () => {
    const [product, setProduct] = useState({})

    const { productId } = useParams()



    useEffect(() => {
        fetch(`http://localhost:5000/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    return (
        <div className='grid lg:grid-cols-2 gap-5 justify-items-center my-20 lg:w-5/6 mx-auto'>
            <ProductDetails
                product={product}
                setProduct={setProduct}
            ></ProductDetails>
            <PurchaseForm
                product={product}
                setProduct={setProduct}
            ></PurchaseForm>
        </div>
    );

};

export default Purchase;






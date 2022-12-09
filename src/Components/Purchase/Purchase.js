import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import ProductDetails from '../ProductDetails/ProductDetails';
import PurchaseForm from '../PurchaseForm/PurchaseForm';

const Purchase = () => {
    const [product, setProduct] = useState({})
    const [user,loading] = useAuthState(auth) 
    const { productId } = useParams()


    useEffect(() => {
        fetch(`https://manufacture-old-production.up.railway.app/products/${productId}`,{
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [user,productId])

    if(loading){
        return <Loading></Loading>
    }

    

    return (
        <div className='lg:grid lg:grid-cols-4 gap-5 justify-items-center mt-2'>
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






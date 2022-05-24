import React from 'react';

const ProductDetails = ({product}) => {
    const description = product?.description;

    return (
        <div>
             <div class="card lg:card-side bg-base-100 shadow-xl">
                <figure>
                    <img src="https://api.lorem.space/image/album?w=400&h=400" alt="" />
                </figure>
                <div class="card-body">
                <h1 class="text-2xl font-bold">{product.name}</h1>
                        <p className='text-xl'>Price:<span className='text-2xl text-primary'> ${product.price}</span></p>
                        <div class="divider"></div>
                        <ul>
                            <li>Brand:{product.brand}</li>
                            <li>style:{product.style}</li>
                            <li>Item Weight:{product.weigth}</li>
                        </ul>
                        <ul className='mt-2'>
                            <h2>About this item:</h2>
                            {
                                description?.map((des, index) => <li key={index}>{des}</li>)
                            }
                        </ul>
                        <ul className='mt-2'>
                            <li>In stack:{product.available_quantity} pices</li>
                        </ul>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
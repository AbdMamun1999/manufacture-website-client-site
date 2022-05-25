import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import Review from '../Review/Review';

const Reviews = () => {
    const { data: products, isLoading, refetch} = useQuery('products', () =>
    fetch('http://localhost:5000/products').then(res =>
      res.json()
    )
  )
  if(isLoading){
      return <Loading></Loading>
  }
  console.log(products)
   
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2'>
            {
                products?.map(product=><Review
                    key={product._id}
                    product={product}
                ></Review>)
            }
        </div>
      
    );
};

export default Reviews;
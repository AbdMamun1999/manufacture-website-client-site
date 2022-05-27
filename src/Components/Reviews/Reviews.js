import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import Review from '../Review/Review';

const Reviews = () => {
   /*  const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []) */

    const { data: products, isLoading, refetch } = useQuery('products', () =>
        fetch('https://agile-dawn-56972.herokuapp.com/products').then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2'>
            {
                products?.map(product => <Review
                    key={product._id}
                    product={product}
                ></Review>)
            }
        </div>

    );
};

export default Reviews;
import React, { useEffect, useState } from 'react';
import HomePageReview from '../HomePageReview/HomePageReview';

const HomePageReviews = () => {

      const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://manufacture-old.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []) 

    
    return (

       <>
       <h1 className='uppercase text-center font-bold my-10'>What others say</h1>
       <div className='grid grid-cols-1 lg:grid-cols-3 mb-10 gap-5 justify-items-center w-4/5 mx-auto'>
           {
               reviews.slice(0,3).map(review =><HomePageReview
                key={review._id}
                review={review}
               ></HomePageReview> )
           }
       </div></>
    );
};

export default HomePageReviews;
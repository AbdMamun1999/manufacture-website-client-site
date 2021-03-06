import React, { useEffect, useState } from 'react';
import HomePageReview from '../HomePageReview/HomePageReview';

const HomePageReviews = () => {

      const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://agile-dawn-56972.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []) 

    console.log(reviews)

    return (

       <>
       <h1 className='uppercase text-center font-bold my-10'>What others say</h1>
       <div className='grid grid-cols-1 lg:grid-cols-3 mb-10 gap-5'>
           {
               reviews.map(review =><HomePageReview
                key={review._id}
                review={review}
               ></HomePageReview> )
           }
       </div></>
    );
};

export default HomePageReviews;
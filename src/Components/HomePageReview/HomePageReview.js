import React from 'react';

const HomePageReview = ({review}) => {
    const {name,reviewNumber,comments,userImg,date} = review;

    const createReviewArray = () =>{

    }

    return (
        <div className='border-2 p-3'>
            <div className='my-2'>
                <div className='rating'>
                    {[...Array(5).keys()].map(key=><input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />)}
                </div>
                <p>{date}</p>
                <hr/>
            </div>
            <div className='mb-2'>
                <p>
                    {comments.slice(0,342)}
                </p>
            </div>
            <div className='flex flex-row items-center gap-2'>
                <div className='w-[56px] h-[56px] border-2 rounded-full text-white text-center '>
                    <img src={userImg} alt="" className='object-contain rounded-full'/>
                </div>
                <h2>{name}</h2>
            </div>
        </div>
    );
};

export default HomePageReview;
import React from 'react';

const HomePageReview = ({review}) => {
    const {name,userName,comments,img} = review;
    return (
        <div>
             <figure class="bg-gray-100 rounded-xl p-8">
            <h1 className='uppercase font-bold mb-2'>{name}</h1>
            {/* <img  src="/sarah-dayan.jpg" alt="" > */}
            <img src={img} alt="" className="w-32 h-32 rounded-full mx-auto"  width="384" height="512"/>
            <div class="pt-6 space-y-4">
                <blockquote>
                    <p class="text-lg">
                       {comments}
                    </p>
                </blockquote>
                <figcaption>
                    <div>
                       {userName}
                    </div>
                </figcaption>
            </div>
        </figure>
        </div>
    );
};

export default HomePageReview;
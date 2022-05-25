import React from 'react';
import Banner from '../Banner/Banner';
import HomePageReviews from '../HomePageReviews/HomePageReviews';
import Tools from '../Tools/Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <HomePageReviews></HomePageReviews>
        </div>
    );
};

export default Home;
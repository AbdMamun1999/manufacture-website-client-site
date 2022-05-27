import React from 'react';
import Banner from '../Banner/Banner';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import HomePageReviews from '../HomePageReviews/HomePageReviews';
import Tools from '../Tools/Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <HomePageReviews></HomePageReviews>
            <BusinessSummary></BusinessSummary>
        </div>
    );
};

export default Home;
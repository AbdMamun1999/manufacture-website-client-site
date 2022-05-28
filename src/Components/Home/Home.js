import React from 'react';
import Banner from '../Banner/Banner';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import HighLightItem from '../HighLightItem/HighLightItem';
import HomePageReviews from '../HomePageReviews/HomePageReviews';
import Tools from '../Tools/Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <HomePageReviews></HomePageReviews>
            <BusinessSummary></BusinessSummary>
            <HighLightItem></HighLightItem>
        </div>
    );
};

export default Home;
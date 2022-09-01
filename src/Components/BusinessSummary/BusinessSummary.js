import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const BusinessSummary = () => {
    return (
        <div className='w-9/12 mx-auto' data-aos="fade-up"
        data-aos-duration="3000">
            <div className='my-10'>
                <h1 className='uppercase text-center text-5xl font-bold mt-10'>MILLION BUSINESS TRUST US</h1>
                <h3 className='uppercase text-center text-2xl '>TRY to understand users expectation</h3>
            </div>
            <div class="stats stats-vertical lg:stats-horizontal w-full">

                <div class="stat text-center">

                    <div class="stat-title">Total Likes</div>
                    <div class="stat-value text-primary">25</div>
                    <div class="stat-title">Countries</div>
                </div>

                <div class="stat text-center">

                    <div class="stat-title">Page Views</div>
                    <div class="stat-value text-secondary">460+</div>
                    <div class="stat-title">Complete Projects</div>
                </div>

                <div class="stat text-center">

                    <div class="stat-title">Tasks done</div>
                    <div class="stat-value">750+</div>
                    <div class="stat-title text-secondary">Happy Clients</div>
                </div>
                <div class="stat text-center">

                    <div class="stat-title">Tasks done</div>
                    <div class="stat-value">354+</div>
                    <div class="stat-title text-secondary">Feedbacks</div>
                </div>

            </div>
        </div>
    );
};

export default BusinessSummary;
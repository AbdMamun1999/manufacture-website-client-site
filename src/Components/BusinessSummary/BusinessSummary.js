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
            <div className="stats stats-vertical lg:stats-horizontal w-full">

                <div className="stat text-center">

                    <div className="stat-title">Total Likes</div>
                    <div className="stat-value text-primary">25</div>
                    <div className="stat-title">Countries</div>
                </div>

                <div className="stat text-center">

                    <div className="stat-title">Page Views</div>
                    <div className="stat-value text-secondary">460+</div>
                    <div className="stat-title">Complete Projects</div>
                </div>

                <div className="stat text-center">

                    <div className="stat-title">Tasks done</div>
                    <div className="stat-value">750+</div>
                    <div className="stat-title text-secondary">Happy Clients</div>
                </div>
                <div className="stat text-center">

                    <div className="stat-title">Tasks done</div>
                    <div className="stat-value">354+</div>
                    <div className="stat-title text-secondary">Feedbacks</div>
                </div>

            </div>
        </div>
    );
};

export default BusinessSummary;
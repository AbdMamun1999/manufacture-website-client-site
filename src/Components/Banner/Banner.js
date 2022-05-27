import React from 'react';

const Banner = () => {
    return (
        <div
            className="hero min-h-screen bg-fixed"
            style={{
                backgroundImage: 'url(https://i.ibb.co/bKGGBZB/26349171.webp)',
                // backgroundAttachment:'fixed'
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello Viewers</h1>
                    <p className="mb-5 text-black font-bold text-2xl">Grand Offer for you 30%</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
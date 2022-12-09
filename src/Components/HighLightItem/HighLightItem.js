import React from 'react';

const HighLightItem = () => {
    return (
        <div className='lg:w-4/6 mx-auto my-10 '>
            <p className='text-center text-4xl font-bold mb-5'>
                High Lignt Products of the day
            </p>
            <div className="card lg:card-side bg-base-100 shadow-xl text-center">
                <figure className='p-3'><img src="https://i.ibb.co/LvBsjmP/index-1.jpg" alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title mx-auto"># M A Y S T O R E</h2>
                    <p className='text-center text-5xl'><span className='block mb-5'>Up To 40% Off</span>
                       <span> Final Sale Items</span></p>
                    <div className="card-actions justify-center mt-3">
                        <button className="btn btn-primary">Let's Go</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HighLightItem;
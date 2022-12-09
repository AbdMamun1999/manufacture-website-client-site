import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <div className='mb-5'>
            {/* <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Hello there</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div> */}
            {/* min-h-screen */}
            <div className="hero bg-primary-200 mt-5">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/CQmQ6N7/IMG-20220418-115838-removebg-preview.jpg" className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div className='grid grid-cols-1 gap-y-3'>
                        <h1 className="text-5xl font-bold">About Me</h1>
                        <p className="">
                            <span className='font-bold'>Name: </span>Abdullah Al Mamun
                        </p>
                        <p className="">
                            <span className='font-bold'>Education: </span>Govt. Titumir College
                        </p>
                        <p className="">
                            <span className='font-bold'>Email: </span>abdullahalmamun12121999@gmail.com
                        </p>
                        <p className="">
                            <span className='font-bold'>Educational Background: </span>Accounting
                        </p>
                        <p className="">
                            <span className='font-bold'>List of Technology for web-devoloping: </span>HTML,CSS,JavaScript,React JS,Node JS,Mongodb,Express,git,github,Bootstrap,Tailwind
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='text-center text-2xl font-bold'>My Projects</h1>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 my-10 justify-items-center'>
                    <div className="card w-96 bg-green-400 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Dental Care</h2>
                            <p className='font-bold'>project link: <a target='blank' href="https://independent-service-prov-6cce2.firebaseapp.com/">Dental Care</a> </p>
                        </div>
                    </div>
                    <div className="card w-96 bg-blue-400 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Laptop Bazar</h2>
                            <p className='font-bold'>project link: <a target='blank' href="https://celadon-pasca-14269c.netlify.app/">Laptop Bazar</a> </p>

                        </div>
                    </div>
                    <div className="card w-96 bg-green-400 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Warehouse management</h2>
                            <p className='font-bold'>project link:<a target='blank' href='https://warehouse-management-authentic.web.app/'>Warehouse Management</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-3/5 mx-auto my-10'>
                <h1 className='font-bold text-center text-2xl my-2'>My Skills</h1>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 justify-items-center'>
                    <div className='mt-2'>
                        <h3>HTML5</h3>
                        <progress className="progress progress-info w-96" value="90" max="100"></progress>
                    </div>
                    <div className='mt-2'>
                        <h3>CSS3</h3>
                        <progress className="progress progress-info w-96" value="90" max="100"></progress>
                    </div>
                    <div className='mt-2'>
                        <h3>JavaScript</h3>
                        <progress className="progress progress-info w-96" value="40" max="100"></progress>
                    </div>
                    <div className='mt-2'>
                        <h3>REACT JS</h3>
                        <progress className="progress progress-info w-96" value="40" max="100"></progress>
                    </div>
                    <div className='mt-2'>
                        <h3>EXPRESS JS</h3>
                        <progress className="progress progress-info w-96" value="30" max="100"></progress>
                    </div>
                    <div className='mt-2'>
                        <h3>MONGODB</h3>
                        <progress className="progress progress-info w-96" value="25" max="100"></progress>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
import React from 'react';

const Portfolio = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content text-center">
                    <div class="max-w-md">
                        <h1 class="text-5xl font-bold">Hello there</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            {/* min-h-screen */}
            <div class="hero bg-primary-200 mt-5">
                <div class="hero-content flex-col lg:flex-row">
                    <img src="https://image.shutterstock.com/image-photo/portrait-smiling-young-college-student-260nw-1192615495.jpg" class="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 class="text-5xl font-bold">Box Office News!</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='text-center text-2xl font-bold'>My Projects</h1>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 my-10 justify-items-center'>
                    <div class="card w-96 bg-green-400 shadow-xl">
                        <div class="card-body">
                            <h2 class="card-title">Card title!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                        </div>
                    </div>
                    <div class="card w-96 bg-blue-400 shadow-xl">
                        <div class="card-body">
                            <h2 class="card-title">Card title!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>

                        </div>
                    </div>
                    <div class="card w-96 bg-green-400 shadow-xl">
                        <div class="card-body">
                            <h2 class="card-title">Card title!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-3/5 mx-auto my-10'>
                <h1 className='font-bold text-center text-2xl my-2'>My Skills</h1>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 justify-items-center'>
                    <div className='mt-2'>
                        <h3>HTML5</h3>
                        <progress class="progress progress-info w-96" value="40" max="100"></progress>
                    </div>
                    <div className='mt-2'>
                        <h3>CSS3</h3>
                        <progress class="progress progress-info w-96" value="40" max="100"></progress>
                    </div>
                    <div className='mt-2'>
                        <h3>JavaScript</h3>
                        <progress class="progress progress-info w-96" value="40" max="100"></progress>
                    </div>
                    <div className='mt-2'>
                        <h3>REACT JS</h3>
                        <progress class="progress progress-info w-96" value="40" max="100"></progress>
                    </div>
                    <div className='mt-2'>
                        <h3>EXPRESS JS</h3>
                        <progress class="progress progress-info w-96" value="40" max="100"></progress>
                    </div>
                    <div className='mt-2'>
                        <h3>MONGODB</h3>
                        <progress class="progress progress-info w-96" value="40" max="100"></progress>
                    </div>
                </div>
            </div>
            <div className='mt-5'>
                <h1 className='text-center font-bold text-2xl'>Others Technology</h1>
                <div>
                    
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
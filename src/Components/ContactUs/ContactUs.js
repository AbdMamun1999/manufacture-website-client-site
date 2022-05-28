import React from 'react';
import { useForm } from 'react-hook-form';
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';


const ContactUs = () => {
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
    }
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 justify-items-center w-4/6 mx-auto my-10 '>
            <div>
                <div className='lg:mb-20'>
                    <h2 className='text-3xl mt-5 lg:mt-0'>Location</h2>
                    <p className='mt-3 font-bold'>151/7(3 and 4 floor), green road <br /> panthapath,Dhaka</p>
                </div>
                <div>
                    <span class="footer-title block mb-5">Follow Us</span>
                    <div class="grid grid-flow-col gap-4">

                        <a href='#'>
                            <FaFacebookSquare style={{ fontSize: '30px' }}></FaFacebookSquare >
                        </a>
                        <a href='#'>
                            <FaTwitterSquare style={{ fontSize: '30px' }}></FaTwitterSquare >
                        </a>
                        <a href='#'>
                            <FaInstagramSquare style={{ fontSize: '30px' }}></FaInstagramSquare >
                        </a>
                        <a href='#'>
                            <FaLinkedin style={{ fontSize: '30px' }}></FaLinkedin >
                        </a>
                    </div>
                </div>
            </div>
            <div className='order-first lg:order-last'>
                <h2 className='text-3xl mb-5 mt-5 lg:mt-0 text-center'>Contact Us </h2>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 justify-items-center'>
                        <div className="form-control  w-96 mx-auto">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Require'
                                    }
                                })} />
                            <label className="label">
                                {errors?.name?.type === 'required' && <span className="label-text-alt text-red-600">{errors?.name.message}</span>}

                            </label>
                        </div>
                        <div className="form-control  w-96 mx-auto">
                            <input
                                type="email"
                                placeholder="email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Require'
                                    },
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: 'Provide a valid email'
                                    }
                                })} />
                            <label className="label">
                                {errors?.email?.type === 'required' && <span className="label-text-alt text-red-600">{errors?.email.message}</span>}
                                {errors?.email?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors?.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control  w-96 mx-auto">
                            <textarea className="textarea textarea-bordered h-20 w-full max-w-xs"
                                placeholder="Enter your message"
                                {...register("comments", {
                                    required: {
                                        value: true,
                                        message: 'Comments is required'
                                    }
                                })}></textarea>
                            <label className="label">
                                {errors?.comments?.type === 'required' && <span className="label-text-alt text-red-600">{errors?.comments.message}</span>}
                            </label>
                            <div>
                                <input type="submit" className="btn btn-primary  w-full max-w-xs text-white" value='Submit' />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
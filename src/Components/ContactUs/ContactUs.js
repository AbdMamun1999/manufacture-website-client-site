import React from 'react';
import { useForm } from 'react-hook-form';
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';


const ContactUs = () => {
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
    }
    return (
        <div className='w-2/5 mx-auto my-10 '>
            <div className=''>
                <div>
                <h2 className='text-3xl mb-5 mt-5 lg:mt-0 text-center uppercase font-bold'>Contact Us </h2>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
                        <div className="form-control ">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full"
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
                        <div className="form-control ">
                            <input
                                type="email"
                                placeholder="email"
                                className="input input-bordered w-full"
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
                        <div className="form-control">
                            <textarea className="textarea textarea-bordered h-20 w-full"
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
                                <input type="submit" className="btn btn-primary  w-full text-white" value='Submit' />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
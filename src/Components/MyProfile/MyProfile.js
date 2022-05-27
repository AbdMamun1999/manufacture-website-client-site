import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const MyProfile = () => {

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const [user, loading] = useAuthState(auth)
    const userName = user?.displayName;
    const userEmail = user?.email;
    if (loading) {
        return <Loading></Loading>
    }

    const onSubmit = data => {
        const { educationLevel, educationalInstitute, linkdinLink, location, phone } = data;
        const userInfo = { userName, userEmail, educationLevel, educationalInstitute, linkdinLink, location, phone }

        fetch(`https://agile-dawn-56972.herokuapp.com/users/${userEmail}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.result.acknowledged === true) {
                    toast.success("Profile Completed")
                }
            })
    }

    return (
        <>
            <h1 className='text-center font-bold mt-5'>Update Your Profile</h1>
            <div className='w-4/6 mx-auto border-2 p-10 my-5 rounded-md'>
                <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 gap-3'>
                    <div className="form-control">
                        <input
                            type="text"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black-600 dark:border-gray-600 dark:focus:border-black-500 focus:outline-none focus:ring-0 focus:border-black-600 peer"
                            value={user?.displayName} readOnly disabled />
                    </div>
                    <div className="form-control">
                        <input
                            type="email"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black-600 dark:border-gray-600 dark:focus:border-black-500 focus:outline-none focus:ring-0 focus:border-black-600 peer"
                            value={user?.email} readOnly disabled />

                    </div>
                    <div className="form-control">
                        <input
                            type="text"
                            placeholder="Name of Educational Institution"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black-600 dark:border-gray-600 dark:focus:border-black-500 focus:outline-none focus:ring-0 focus:border-black-600 peer"
                            {...register("educationalInstitute", {
                                required: {
                                    value: true,
                                    message: 'Educational Instutition is Require'
                                }

                            })} />
                        <label className="label">
                            {errors?.educationalInstitute?.type === 'required' && <span className="label-text-alt text-red-600">{errors?.educationalInstitute.message}</span>}
                        </label>
                    </div>
                    <div className="form-control">
                        <input
                            type="text"
                            placeholder="Education Level"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black-600 dark:border-gray-600 dark:focus:border-black-500 focus:outline-none focus:ring-0 focus:border-black-600 peer"
                            {...register("educationLevel", {
                                required: {
                                    value: true,
                                    message: 'Education Level is Require'
                                }

                            })} />
                        <label className="label">
                            {errors?.educationLevel?.type === 'required' && <span className="label-text-alt text-red-600">{errors?.educationLevel.message}</span>}
                        </label>
                    </div>
                    <div className="form-control">
                        <input
                            type="text"
                            placeholder="Phone Number"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black-600 dark:border-gray-600 dark:focus:border-black-500 focus:outline-none focus:ring-0 focus:border-black-600 peer"
                            {...register("phone", {
                                required: {
                                    value: true,
                                    message: 'phone Number is Require'
                                }

                            })} />
                        <label className="label">
                            {errors?.phone?.type === 'required' && <span className="label-text-alt text-red-600">{errors?.phone.message}</span>}
                        </label>
                    </div>
                    <div className="form-control">
                        <input
                            type="text"
                            placeholder="Your Location (Road/Area/City)"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black-600 dark:border-gray-600 dark:focus:border-black-500 focus:outline-none focus:ring-0 focus:border-black-600 peer"
                            {...register("location", {
                                required: {
                                    value: true,
                                    message: 'Location is Require'
                                }

                            })} />
                        <label className="label">
                            {errors?.location?.type === 'required' && <span className="label-text-alt text-red-600">{errors?.location.message}</span>}
                        </label>
                    </div>
                    <div className="form-control">
                        <input
                            type="text"
                            placeholder="Your Linkdin Profile Link"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black-600 dark:border-gray-600 dark:focus:border-black-500 focus:outline-none focus:ring-0 focus:border-black-600 peer"
                            {...register("linkdinLink", {
                                required: {
                                    value: true,
                                    message: 'Linkdin Profile Link is Require'
                                }

                            })} />
                        <label className="label">
                            {errors?.linkdinLink?.type === 'required' && <span className="label-text-alt text-red-600">{errors?.linkdinLink.message}</span>}
                        </label>
                    </div>
                    <div>
                        <input type="submit" className="btn btn-primary  w-full max-w-xs text-white" value='Submit' />
                    </div>
                </form>
            </div>
        </>
    );
};

export default MyProfile;
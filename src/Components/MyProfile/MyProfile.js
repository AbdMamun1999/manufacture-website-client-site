import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const MyProfile = () => {

    const { register, handleSubmit, watch, formState: { errors },reset } = useForm();
    const [user, loading] = useAuthState(auth)
    const userName = user?.displayName;
    const userEmail = user?.email;
    if (loading) {
        return <Loading></Loading>
    }

    console.log(userName, userEmail)
    const onSubmit = data => {
        const { educationLevel, educationalInstitute, linkdinLink, location, phone } = data;
        const userInfo = { userName, userEmail, educationLevel, educationalInstitute, linkdinLink, location, phone }
        console.log(userInfo)
        fetch(`http://localhost:5000/users/${userEmail}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data,'myprofile')
                if (data.acknowledged === true) {
                    toast.success("Profile Completed")
                }
            })
    }

    return (
        <>
            <h1 className='text-center font-bold mt-5'>Update Your Profile</h1>
            <div className='w-4/6 mx-auto border-2 p-10 my-5 rounded-md'>
                <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 gap-3'>
                    <div class="form-control">
                        <input
                            type="text"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black-600 dark:border-gray-600 dark:focus:border-black-500 focus:outline-none focus:ring-0 focus:border-black-600 peer"
                            value={user?.displayName} readOnly disabled />
                    </div>
                    <div class="form-control">
                        <input
                            type="email"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black-600 dark:border-gray-600 dark:focus:border-black-500 focus:outline-none focus:ring-0 focus:border-black-600 peer"
                            value={user?.email} readOnly disabled />

                    </div>
                    <div class="form-control">
                        <input
                            type="text"
                            placeholder="Name of Educational Institution"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black-600 dark:border-gray-600 dark:focus:border-black-500 focus:outline-none focus:ring-0 focus:border-black-600 peer"
                            {...register("educationalInstitute", {
                                required: {
                                    value: true,
                                    message: 'Educational Instutition is Require'
                                }

                            })} />
                        <label class="label">
                            {errors?.educationalInstitute?.type === 'required' && <span class="label-text-alt text-red-600">{errors?.educationalInstitute.message}</span>}
                        </label>
                    </div>
                    <div class="form-control">
                        <input
                            type="text"
                            placeholder="Education Level"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black-600 dark:border-gray-600 dark:focus:border-black-500 focus:outline-none focus:ring-0 focus:border-black-600 peer"
                            {...register("educationLevel", {
                                required: {
                                    value: true,
                                    message: 'Education Level is Require'
                                }

                            })} />
                        <label class="label">
                            {errors?.educationLevel?.type === 'required' && <span class="label-text-alt text-red-600">{errors?.educationLevel.message}</span>}
                        </label>
                    </div>
                    <div class="form-control">
                        <input
                            type="text"
                            placeholder="Phone Number"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black-600 dark:border-gray-600 dark:focus:border-black-500 focus:outline-none focus:ring-0 focus:border-black-600 peer"
                            {...register("phone", {
                                required: {
                                    value: true,
                                    message: 'phone Number is Require'
                                }

                            })} />
                        <label class="label">
                            {errors?.phone?.type === 'required' && <span class="label-text-alt text-red-600">{errors?.phone.message}</span>}
                        </label>
                    </div>
                    <div class="form-control">
                        <input
                            type="text"
                            placeholder="Your Location (Road/Area/City)"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black-600 dark:border-gray-600 dark:focus:border-black-500 focus:outline-none focus:ring-0 focus:border-black-600 peer"
                            {...register("location", {
                                required: {
                                    value: true,
                                    message: 'Location is Require'
                                }

                            })} />
                        <label class="label">
                            {errors?.location?.type === 'required' && <span class="label-text-alt text-red-600">{errors?.location.message}</span>}
                        </label>
                    </div>
                    <div class="form-control">
                        <input
                            type="text"
                            placeholder="Your Linkdin Profile Link"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black-600 dark:border-gray-600 dark:focus:border-black-500 focus:outline-none focus:ring-0 focus:border-black-600 peer"
                            {...register("linkdinLink", {
                                required: {
                                    value: true,
                                    message: 'Linkdin Profile Link is Require'
                                }

                            })} />
                        <label class="label">
                            {errors?.linkdinLink?.type === 'required' && <span class="label-text-alt text-red-600">{errors?.linkdinLink.message}</span>}
                        </label>
                    </div>
                    <div>
                        <input type="submit" class="btn btn-primary  w-full max-w-xs text-white" value='Submit' />
                    </div>
                </form>
            </div>
        </>
    );
};

export default MyProfile;
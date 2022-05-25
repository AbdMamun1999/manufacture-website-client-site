import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const Review = ({product}) => {
    const [user, loading] = useAuthState(auth)
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const {_id,name} = product
    const userName = user?.displayName;
    const userEmail = user?.email;


    if(loading){
        return <Loading></Loading>
    }

    const onSubmit = data => {
        const {comments} = data
        const reviews = {productId:_id,name,userName,userEmail,comments}
        fetch(`http://localhost:5000/reviews`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged === true) {
                    toast.success("Profile Completed")
                }
            })
    }

    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl mx-auto mt-5">
                <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">
                        Shoes!
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div class="form-control mt-8 w-96 mx-auto">
                        <textarea class="textarea textarea-bordered h-24" placeholder="Whats on your mind?"
                            {...register("comments", {
                                required: {
                                    value: true,
                                    message: 'Comments is required'
                                }
                            })}></textarea>
                        <label class="label">
                            {errors?.comments?.type === 'required' && <span class="label-text-alt text-red-600">{errors?.comments.message}</span>}
                        </label>
                        <div>
                            <input type="submit" class="btn btn-primary  w-full max-w-xs text-white" value='Submit' />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Review;
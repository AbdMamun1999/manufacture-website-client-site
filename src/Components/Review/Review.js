import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const Review = ({ product }) => {

    const [user, loading] = useAuthState(auth)
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    /* const { _id, name ,img} = product
    const userName = user?.displayName;
    const userEmail = user?.email; */



    if (loading) {
        return <Loading></Loading>
    }

    const handleDate = () => {
        const date = new Date()
        const currentDay = date.getDate();
        const currentYear = date.getFullYear();
        // 👇️ Get Names of Month instead of Digits
        const nameOfMonthUS = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date,);
        const today = [currentDay, nameOfMonthUS, currentYear].join(' ');
        return today;
    }



    const onSubmit = data => {
        const date = handleDate()
        const { comments, number } = data
        const reviewNumber = parseInt(number)
        /* const reviews = { productId: _id, name, userName, userEmail, comments,img } */
        const review = { userImg: user?.photoURL, name: user?.displayName, comments, reviewNumber, date}
        
        fetch(`https://manufacture-old.vercel.app/reviews`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    toast.success("Review Successful")
                }
            })
    }

    return (
        <div >
            <h1 className='text-center uppercase font-bold text-xl my-3'>Tell us about our product</h1>
            <div className="w-96 mx-auto mt-5 border-2 p-5 rounded">
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3'>
                    <div className='form-control mb-3'>
                        <input type="text" className='input w-full' name="" value={user?.displayName} disabled />
                    </div>
                    <div className="form-control ">
                        <textarea className="textarea textarea-bordered border-2" placeholder="Whats on your mind?"
                            {...register("comments", {
                                required: {
                                    value: true,
                                    message: 'Comments is required'
                                }
                            })}></textarea>
                        <label className="label">
                            {errors?.comments?.type === 'required' && <span className="label-text-alt text-red-600">{errors?.comments.message}</span>}
                        </label>
                    </div>
                    <div className="form-control ">
                        <input type='text' className="input input-bordered" placeholder="review out of 5"
                            {...register("number", {
                                required: {
                                    value: true,
                                    message: 'Comments is required'
                                }
                            })}></input>
                        <label className="label">
                            {errors?.comments?.type === 'required' && <span className="label-text-alt text-red-600">{errors?.comments.message}</span>}
                        </label>
                    </div>
                    <div>
                        <input type="submit" className="bg-primary  w-full p-5 text-white rounded" value='Post' />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Review;
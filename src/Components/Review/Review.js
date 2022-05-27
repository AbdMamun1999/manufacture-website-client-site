import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const Review = ({ product }) => {

    const [user, loading] = useAuthState(auth)
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const { _id, name ,img} = product
    const userName = user?.displayName;
    const userEmail = user?.email;



    if (loading) {
        return <Loading></Loading>
    }



    const onSubmit = data => {
        const { comments } = data
        const reviews = { productId: _id, name, userName, userEmail, comments,img }
        fetch(`https://agile-dawn-56972.herokuapp.com/reviews`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    toast.success("Profile Completed")
                }
            })
    }

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto mt-5">
                <figure><img src={product.img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {product.name.split(0,15)}
                    </h2>
                    <p>
                    </p>
                </div>
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="form-control mt-8 w-96 mx-auto">
                        <textarea className="textarea textarea-bordered h-24" placeholder="Whats on your mind?"
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
                            <input type="submit" className="btn btn-primary  w-full max-w-xs text-white" value='Post' />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Review;
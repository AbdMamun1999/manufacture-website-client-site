import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../Loading/Loading';


const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const token = useToken(user || gUser)

    let signInError;
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";


    if (loading || gLoading) {
        return <Loading></Loading>
    }

    if (error || gError) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
    }

    const onSubmit = data => {
        const { email, password } = data;
        signInWithEmailAndPassword(email, password)
    };

    const handleSignInWithGoogle = () => {
        signInWithGoogle()
    }

    if (token) {
        navigate(from, { replace: true });
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <h1 className="py-6 text-5xl font-bold">Welcome to Super Max Tools</h1>
                    <div>
                        <p className="text-center">
                            Don't have an account?
                            <span className="label-text font-bold"><Link to='/signup'>Sign up</Link></span>
                        </p>
                    </div>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h2 className='card-title'>Login To Your Account</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                {/*   <label className="label">
                                <span className="label-text">Email</span>
                            </label> */}
                                <input
                                    type="email"
                                    placeholder="email"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black-600 dark:border-gray-600 dark:focus:border-black-500 focus:outline-none focus:ring-0 focus:border-black-600 peer"
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
                                {/* <label className="label">
                                <span className="label-text">Password</span>
                            </label> */}
                                <input
                                    type="password"
                                    placeholder="password"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black-600 dark:border-gray-600 dark:focus:border-black-500 focus:outline-none focus:ring-0 focus:border-black-600 peer"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'Password is Require'
                                        }
                                    })} />
                                <label className="label">
                                    {errors?.password?.type === 'required' && <span className="label-text-alt text-red-600">{errors?.password.message}</span>}
                                </label>
                            </div>
                            {signInError}
                            <input type="submit" className="btn btn-primary  w-full max-w-xs text-white" value='login' />
                        </form>

                        <div className="divider">OR</div>
                        <button
                            onClick={handleSignInWithGoogle}
                            type="button"
                            className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                            <svg className="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                            Sign in with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
import { signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const Navbar = () => {
    const [user, loading] = useAuthState(auth)
    const navigate = useNavigate()


    if (loading) {
        return <Loading></Loading>
    }

    const handleLogOut = () => {
        signOut(auth)
        navigate('/login')
    }
    console.log(user?.displayName)

    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/myporfolio">My Portfolio</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About</Link></li>
        {
            user && <li><Link to="/dashboard">Dashboard</Link></li>
        }
        {
            user?.displayName ?
                    <button
                        onClick={handleLogOut}
                        className='btn btn-ghost'>
                        logout
                    </button>
                :
                <li><Link to="/login">Login</Link></li>
        }

    </>
    return (
        <div className="bg-gradient-to-r from-primary to-secondary lg:px-40">
            <div class="navbar ">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <a href='' class="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div class="navbar-end hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;
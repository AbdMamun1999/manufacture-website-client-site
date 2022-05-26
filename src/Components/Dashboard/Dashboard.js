import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile mb-11">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
         <Outlet></Outlet>
        </div> 
        <div className="drawer-side bg-slate-500">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 overflow-y-auto w-80 bg-slate-500 text-base-content">
            <li><Link to='/dashboard'>My Orders</Link></li>
            <li><Link to='/dashboard/reviews'>Reviews</Link></li>
            <li><Link to='/dashboard/profile'>My Profile</Link></li>
            <li><Link to='/dashboard/ManageAllProduct'>Manage All Product</Link></li>
            <li><Link to='/dashboard/addAProduct'>Add A Product</Link></li>
            <li><Link to='/dashboard/makeAdmin'>Make Admin</Link></li>
            <li><Link to='/dashboard/manageProduct'>Manage Product</Link></li>
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;
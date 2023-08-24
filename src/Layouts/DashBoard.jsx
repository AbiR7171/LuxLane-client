import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Routes/AuthProvider';
import { Icon } from '@iconify/react';

const DashBoard = () => {

  const {user, handleLogOut}=useContext(AuthContext)
  console.log(user);


    return (
        <div>
            <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */} <Outlet/>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>  

      
    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content fontPrimary fontSize uppercase space-y-1">
      {/* Sidebar content here */}
       <li className='text-3xl logoFont text-center mb-5'> LuxeLane</li>
      <li className='border rounded-lg bg-gray-500 text-white'><Link to="/dashboard/home">Home <Icon icon="carbon:home" /></Link></li>
      <li className='border rounded-lg bg-gray-500 text-white'><Link to="/dashboard/allUser"> Manage User <Icon icon="mdi:user" /></Link></li>
      <li className='border rounded-lg bg-gray-500 text-white'><a> Manage Product <Icon icon="fluent-mdl2:product" /></a></li>
      <li className='border rounded-lg bg-gray-500 text-white'><a> Add Product <Icon icon="zondicons:add-solid" /></a></li>
      <li className='border rounded-lg bg-gray-500 text-white'><a> Order List <Icon icon="material-symbols:order-play" /></a></li>
      <hr  className="divider"/>
      <li className='border rounded-lg bg-gray-500 text-white'><Link to="/"> Home <Icon icon="carbon:home" /></Link></li>
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default DashBoard;
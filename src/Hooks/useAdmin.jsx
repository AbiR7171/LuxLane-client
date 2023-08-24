import React, { useContext } from 'react';


import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../Routes/AuthProvider';
import axios from 'axios';
import useAxiosSecure from './useAxiosSecure';

const useAdmin = () => {
   const {user, loading}=useContext(AuthContext)
   const[axiosSecure]=useAxiosSecure()
   
    const token = localStorage.getItem("access-token")
  

   const {data:isAdmin, isLoading:adminLoading, refetch}= useQuery({

    queryKey:["isAdmin", user?.email],
    enabled:!loading,
    queryFn:async()=>{
        const res = await axiosSecure.get(`http://localhost:5000/users/admin/${user?.email}` );
        return res.data.admin;
    }
   })
   return[isAdmin, adminLoading]
};

export default useAdmin;
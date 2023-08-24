import React, { useContext } from 'react';
import { AuthContext } from '../Routes/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useUser = () => {

   
          const{loading}=useContext(AuthContext)
          const token = localStorage.getItem("access-token")
  


    const {refetch, data: users = []}=useQuery({
         queryKey:["user"],
         enabled:!loading,
         queryFn: async()=> {
               
                const res = await fetch(`http://localhost:5000/users`,
                {
                    headers:{
                        authorization: `bearer ${token}`
                    }
                })
                return res.json();
         }
    })

    return [users, refetch]
    
};

export default useUser;
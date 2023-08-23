import React, { useContext } from 'react';
import { AuthContext } from '../Routes/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useCart = () => {

    const {user, loading}=useContext(AuthContext);


    const {refetch, data: cart = []}=useQuery({
         queryKey:["carts", user?.email],
         enabled:!loading,
         queryFn: async()=> {
               
                const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`)
                return res.json();
         }
    })

    return [cart, refetch]
    
};

export default useCart;
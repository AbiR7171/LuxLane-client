import React, { useContext } from 'react';
import { AuthContext } from '../Routes/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useMyProduct = () => {

    const {user, loading}=useContext(AuthContext);

    // const token = localStorage.getItem("access-token")


    const {refetch, data: product = []}=useQuery({
         queryKey:["products", user?.email],
         enabled:!loading,
         queryFn: async()=> {
               
                const res = await fetch(`http://localhost:5000/products/my?email=${user?.email}`)
                return res.json();
         }
    })

    return [product, refetch]
    
};

export default useMyProduct;
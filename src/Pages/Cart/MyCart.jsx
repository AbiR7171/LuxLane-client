import React from "react";
import useCart from "../../Hooks/useCart";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { Icon } from '@iconify/react';

const MyCart = () => {
  const [cart, refetch] = useCart();
  console.log(cart);


      const handleDeleteItems=(id)=>{
                    
               axios.delete(`http://localhost:5000/cart/${id}`)
               .then(res =>{
                console.log(res);
                
                
           
                    

                        if(res.data.deletedCount > 0){
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                              )
        
                        }
               
               })
               .catch(error =>{
                console.log(error.message);
               })
      }
  return (
    <div className="bg-zinc-200 container mx-auto rounded-lg mt-10 fontPrimary p-4">
      <p className="text-3xl text-center mt-10 ">Your Cart Product</p> 
      

      <div className="mt-10">
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr className="text-2xl">
                <th></th>
                <th>Product Name</th>
                <th>Product Image</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th>Company</th>
           
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((c, index) => {
                return  <tr className="fontSize">
                <th>{index + 1}</th>
                <td>{c.productName}</td>
                <td><img src={c.productImg} className="w-16 rounded-xl hover:w-40 duration-500" alt="" /></td>
                <td> ${c.price}</td>
                <td> {c.quantity}</td>
                <td> ${c.totalPrice}</td>
                <td> {c.seller}</td>
               
                <td className="flex items-center"><button onClick={()=>handleDeleteItems(c._id)} className="btn bg-red-600 text-white ">Delete <Icon icon="material-symbols:delete" rotate={0} /></button></td>
                <td > <Link to={`/checkOut/${c._id}`}><button className="btn bg-orange-600 text-white mb-8"> <p>CheckOut </p> <Icon icon="jam:arrow-up" rotate={1} /></button></Link></td>
              </tr>
              })}
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCart;

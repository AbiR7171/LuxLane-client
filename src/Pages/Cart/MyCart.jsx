import React from "react";
import useCart from "../../Hooks/useCart";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const MyCart = () => {
  const [cart, refetch] = useCart();


      const handleDeleteItems=(id)=>{
                    
               axios.delete(`http://localhost:5000/cart/${id}`)
               .then(res =>{
                console.log(res);
                
                
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                  }).then((result) => {
                    if (result.isConfirmed) {

                        if(res.data.deletedCount > 0){
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                              )
        
                        }
                    
                    }
                  })
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
               
                <td><button onClick={()=>handleDeleteItems(c._id)} className="btn bg-red-600 text-white ">Delete</button></td>
                <td> <Link><button className="btn bg-orange-600 text-white ">CheckOut</button></Link></td>
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

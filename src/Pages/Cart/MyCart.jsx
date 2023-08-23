import React from "react";
import useCart from "../../Hooks/useCart";
import { Link } from "react-router-dom";

const MyCart = () => {
  const [cart, refetch] = useCart();
  return (
    <div className="bg-zinc-200 container mx-auto rounded-lg mt-10 fontPrimary p-4">
      <p className="text-3xl text-center ">Your Cart Product</p>

      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr className="text-2xl">
                <th></th>
                <th>Product Name</th>
                <th>Product Image</th>
                <th>Price</th>
                <th>Company</th>
                <th>Total Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((c, index) => {
                return  <tr className="fontSize">
                <th>{index + 1}</th>
                <td>{c.productName}</td>
                <td><img src={c.productImg} className="w-16 rounded-xl" alt="" /></td>
                <td> ${c.price}</td>
                <td> ${c.seller}</td>
                <td> ${c.totalPrice}</td>
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

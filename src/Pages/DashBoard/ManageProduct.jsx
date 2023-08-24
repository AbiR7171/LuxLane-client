import React from 'react';
import useMyProduct from '../../Hooks/useMyProduct';
import { Icon } from '@iconify/react';

const ManageProduct = () => {

    const[product]=useMyProduct()
    console.log(product);
    return (
        <div className='w-full bg-zinc-200 h-full'>
        <p className='text-5xl fontPrimary text-center mb-4 mt-4 underline'>Manage Products</p> 
         

        <div className="overflow-x-auto fontPrimary">
<table className="table table-zebra">
{/* head */}
<thead>
  <tr className='text-2xl'>
    <th>No.</th>
    <th>Product name</th>
    <th>Image</th>
    <th>price</th>
    <th>ratings</th>
    <th>category</th>
    <th></th>
  
  </tr>
</thead>
<tbody>
  {product.map((user,index) => {
    return   <tr className='fontSize'>
    <th>{index + 1}</th>
    <td>{user.productName}</td>
    <td><img src={user.img} className='w-14 h-14 rounded-lg' alt="" /></td>
    <td> ${user.price}</td>
    <td>{user.ratings}</td>
    <td>{user.category}</td>
    <td ><button onClick={()=>handleDeleteUser(user._id)} className='flex items-center gap-2 btn bg-red-600 text-white'>Delete <Icon icon="material-symbols:delete" rotate={0} /> </button></td>
    {/* <td> <button onClick={()=> handleAdmin(user)} className='flex items-center gap-2 bg-orange-500 btn'>Admin <Icon icon="clarity:administrator-solid" rotate={0} /></button></td> */}
  </tr>
  })}
 
 
</tbody>
</table>
</div>
        
    </div>
    );
};

export default ManageProduct;
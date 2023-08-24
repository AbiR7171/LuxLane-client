import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Icon } from '@iconify/react';
import axios from 'axios';
import Swal from 'sweetalert2';
import useUser from '../../Hooks/useUser';

const AllUser = () => {

  
         const [users, refetch]=useUser()
         console.log(users);
        

         const handleAdmin = user=>{
                        
             axios.patch(`http://localhost:5000/user/admin/${user._id}`)
             .then(data => {
                console.log(data);
                if(data.data.modifiedCount > 0){
                    refetch()
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: `${user.name} is admin now`,
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
             })
         }


      const handleDeleteUser = (id)=>{
         
                axios.delete(`http://localhost:5000/user/${id}`)
                .then(data => {
                     console.log(data);
               

                        if(data.data.deletedCount > 0){
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                              )
        
                        }
                    
                     
               })
                .catch(error => {
                      console.log(error);
                })
      }

    return (
        <div className='w-full bg-zinc-200 h-full'>
            <p className='text-5xl fontPrimary text-center mb-4 mt-4 underline'>Manage User</p> 
             

            <div className="overflow-x-auto fontPrimary">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr className='text-2xl'>
        <th>No.</th>
        <th>Name</th>
        <th>Image</th>
        <th>Email</th>
        <th>Role</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {users.map((user,index) => {
        return   <tr className='fontSize'>
        <th>{index + 1}</th>
        <td>{user.name}</td>
        <td><img src={user.image} className='w-14 h-14 rounded-lg' alt="" /></td>
        <td>{user.email}</td>
        <td>{user.role}</td>
        <td ><button onClick={()=>handleDeleteUser(user._id)} className='flex items-center gap-2 btn bg-red-600 text-white'>Delete <Icon icon="material-symbols:delete" rotate={0} /> </button></td>
        <td> <button onClick={()=> handleAdmin(user)} className='flex items-center gap-2 bg-orange-500 btn'>Admin <Icon icon="clarity:administrator-solid" rotate={0} /></button></td>
      </tr>
      })}
     
     
    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default AllUser;
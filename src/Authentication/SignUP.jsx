import React, { useContext } from 'react';
import { AuthContext } from '../Routes/AuthProvider';
import Swal from 'sweetalert2';
import { Link, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUP = () => {

    const {handleCreateUser, handleUpdateProfile}=useContext(AuthContext)  
    const location = useLocation()
    console.log(location);
    const from = location?.state?.to?.pathname ||"/";
    const navigate = useNavigate()

     const handleForm = event =>{
         event.preventDefault()
         const form = event.target;
         const name = form.name.value;
         const email = form.email.value;
         const password = form.password.value;
         const confirmPassword = form.confirmPassword.value;
         const image = form.image.value;

      

         console.log(name, email, password, confirmPassword, image);


         axios.post("http://localhost:5000/users",
         {
          name, email, image, role:"Buyer"
         })
         .then(res =>{
          console.log(res);
         })
         .catch(error =>{
          console.log(error);
         })

         if(password !== confirmPassword){
            return   Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Password Dosen't Match ",
              })
         }

         handleCreateUser(email, password)
         .then(result => {
            console.log(result.user);
            form.reset();
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Signup successfully',
                showConfirmButton: false,
                timer: 1500
              })

              navigate(from, {replace:true})

              handleUpdateProfile(result.user, name, image)
         })
         .catch(error =>{
            console.log(error.message);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${error.message}`,
              })
         })
     }

    return (
        <div 
              className=' bg-stone-100 container mx-auto rounded-lg mt-10'
        >
             <div className="flex flex-row-reverse fontPrimary">
      <div className="w-full p-8">
        <h2 className="text-4xl mb-4 text-center font-bold ">Please Register</h2>
        <form onSubmit={handleForm} className="space-y-4 px-44">
          <div>
            <label className="block mb-1 text-2xl">Name:</label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-2xl">Email:</label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-2xl">Password:</label>
            <input
              type="password"
              name="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-2xl">Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-2xl">Image:</label>
            <input
              type="input"
              name="image"
              className="w-full px-4 py-2 border  rounded-lg focus:outline-none focus:border-blue-400"
              required
            />
          </div> 
          <p className='fontSize'>Already Have an account in LuxeLane ? please<span className=' btn btn-link'><Link to="/signIn">Login</Link></span></p>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
          >
            Register
          </button>
        </form>
      </div>
    </div>
        </div>
    );
};

export default SignUP;
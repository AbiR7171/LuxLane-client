import React, { useContext } from 'react';
import { Link, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Routes/AuthProvider';
import Swal from 'sweetalert2';

const SignIn = () => {

    const {  handleSignIn}=useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    console.log(location);
    const from = location?.state?.from?.pathname || "/";
  
    

    const handleForm = event =>{

        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        handleSignIn(email, password)
        .then(result =>{
            console.log(result.user);
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Login successfully',
                showConfirmButton: false,
                timer: 1500
              })

              navigate(from, {replace:true})

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
        <div>

         <div 
              className=' bg-stone-100 container mx-auto rounded-lg mt-10'
        >
             <div className="flex flex-row-reverse fontPrimary">
      <div className="w-full p-8">
        <h2 className="text-4xl mb-4 text-center font-bold ">Please Login</h2>
        <form onSubmit={handleForm} className="space-y-4 px-44">
        
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
          <p className='fontSize'>New At LuxeLane ? please<span className=' btn btn-link'><Link to="/signUp" state={{to : location}} >signUp</Link></span></p>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
          >
            LogIn
          </button>
        </form>
      </div>
    </div>
        </div>
            
        </div>
    );
};

export default SignIn;
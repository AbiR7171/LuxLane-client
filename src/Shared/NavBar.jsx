import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { AuthContext } from "../Routes/AuthProvider";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";

const NavBar = () => {
  const { user, handleLogOut  } = useContext(AuthContext);
  const [hide, setHide]=useState(true)

  const[cart, refetch]=useCart();
  const[isAdmin]=useAdmin()
  console.log(isAdmin);

  console.log(cart);

  return (
    <div>
      <div className="navbar bg-base-100 text-black font-serif px-8">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-5xl logoFont ">
            LuxeLane
          </a>
        </div>
        <div className="navbar-center hidden lg:flex fontPrimary  ">
          <ul className="menu menu-horizontal px-1 fontSize">
            <li className="fontSize">
              <Link>Home</Link>
            </li>
            <li className="fontSize">
              <Link to="/products">Product</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end space-x-5 fontPrimary fontSize">
          {user ? (
            <div className="flex items-center gap-3">
              <Link to="/myCart">
                <p className="flex items-center">
                  <Icon icon="mdi:cart" /> ({cart.length || 0})
                </p>
              </Link>

              <Link>
                <p className="flex items-center">
                  {" "}
                  <Icon icon="mdi:heart" /> (0)
                </p>
              </Link> 
               <img   src={user.photoURL} className="w-12 h-12 rounded-full" title={user.displayName} alt="" />
            </div>
          ) : (
            <Link to="/signIn">
              <p className="flex items-center uppercase">
                {" "}
                <Icon icon="iconamoon:profile" /> Login
              </p>
            </Link>
          )}
          {/* <p>
            {" "}
            <Icon icon="material-symbols:search" />
          </p> */}

          <p>
            {" "}
            <Icon onClick={()=> setHide(!hide)} icon="heroicons-solid:menu" />{" "}
          </p> 

           <div className={`bg-black w-64 mainFont rounded-xl p-6 mt-44 absolute z-20  text-white ${hide ? " hidden -right-96 duration-500" :  " duration-500 right-0  "} `}>


          {
            isAdmin &&  <Link to="/dashboard/home">
            
            <p className="flex items-center justify-center gap-2 text-2xl">Dashboard <Icon icon="material-symbols:space-dashboard" /></p> 
            </Link>
          }

            <hr  className="mt-3"/>

            <Link>
            <p onClick={handleLogOut} className="flex items-center justify-center gap-2 text-2xl">LogOut <Icon icon="solar:logout-3-bold-duotone" rotate={2} /></p> 
            </Link>
            

           


           </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

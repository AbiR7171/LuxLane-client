import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLoaderData, useLocation, useNavigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {

      const{user, loading}=useContext(AuthContext)
      const location = useLocation()
      
      // console.log(location);
      // console.log(loading);


      if(user){
        return children
      }
      if(loading){
        return <progress className="progress w-56"></progress>
      }

      else{
          return <Navigate to="/signIn" state={{from: location}}  replace/>
      }


      // if(!user){
      //   return  <Navigate to="/signIn" state={{from: location}} replace/>
      // }
      
      // if(loading){
      //    return <progress className="progress w-56"></progress>
      // }

      // else{
      //   return children
      // }
     

};

export default PrivateRoute;
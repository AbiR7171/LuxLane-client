import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';

const AdminRoute = ({children}) => {
    const{ loading}=useContext(AuthContext)
      const location = useLocation()
      const[isAdmin]=useAdmin()
      
      if(isAdmin){
        return children
      }
      if(loading){
        return <progress className="progress w-56"></progress>
      }

      else{
          return <Navigate to="/signIn" state={{from: location}}  replace/>
      }

};

export default AdminRoute;
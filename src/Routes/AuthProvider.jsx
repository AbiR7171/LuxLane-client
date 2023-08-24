import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.confiq';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';


  export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    

    const[user, setUser]=useState(null)
    const[loading,setLoading]=useState(true)



    const auth = getAuth(app);

    const handleCreateUser =(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const handleSignIn = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const handleUpdateProfile= (user, name, photo)=>{
        setLoading(true)
        updateProfile(user, {
            displayName:name, photoURL:photo
        })
        .then(()=>{

        })
        .catch(error =>{
            console.log(error.message);
        })
    }

    const handleLogOut =()=>{
        setLoading(true)
        signOut(auth)
        .then(()=>{
          
        })
        .catch(error =>{
            console.log(error.message);
        })
    }


    useEffect(()=>{


        setLoading(true)

        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
               setUser(currentUser)
            
                 
               if(currentUser){
                     axios.post("http://localhost:5000/jwt", { email : currentUser.email})
                     .then(res => {
                        console.log(res.data.token);
                        localStorage.setItem("access-token", res.data.token)
                        setLoading(false) 
                     })
               }
               else{
                     localStorage.removeItem("access-token")
               }
        })
        return ()=> unsubscribe()
    },[])



    const authInfo = {

        handleCreateUser,
        handleSignIn,
        handleUpdateProfile,
        user,
        handleLogOut,
        loading

    }


    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
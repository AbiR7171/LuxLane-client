import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.confiq';


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
               setLoading(false)
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
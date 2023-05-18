import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';

const auth=getAuth(app)
export const UserIdentity=createContext(null)

const PropsApi = ({children}) => {
    const [user,SetUser]=useState(null)
    const [loading,SetLoading]=useState(true)
    const googleProvider=new GoogleAuthProvider()
    
    const createUser=(email,password)=>{
        SetLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn=(email,password)=>{
        SetLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut=()=>{
        SetLoading(true)
        return signOut(auth)
    }

    const googleLogIn=()=>{
        SetLoading(true)
        return signInWithPopup(auth,googleProvider)
        
    }

    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth,currentUser=>{
        SetUser(currentUser)
        SetLoading(false)

       })
       return ()=>{
        unsubscribe()
       }
    },[])
    const userInfo={
        user,
        loading,
        createUser,
        signIn,
        googleLogIn,
        logOut
    }
    return (
        <UserIdentity.Provider value={userInfo}>
            {children}
        </UserIdentity.Provider>
    );
};

export default PropsApi;
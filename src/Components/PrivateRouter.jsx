import React, { useContext } from 'react';
import { UserIdentity } from './PropsApi';
import { Navigate, useLocation, useNavigation } from 'react-router-dom';

const PrivateRouter = ({children}) => {
    const {user,loading}=useContext(UserIdentity)
    const location=useLocation()
    console.log(location);

    // disyui loading 
    // if(loading){
    //     return <progress className="progress w-56"></progress>
    // }
    if(loading){
        return  <p className='animate-spin w-10 h-10 border-8 border-sky-700 border-dotted rounded-full mt-5'></p>
    }

    if(user){
        return children
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivateRouter;
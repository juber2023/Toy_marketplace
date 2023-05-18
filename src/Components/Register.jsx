import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';
import { UserIdentity } from './ContextApi';
import { FcGoogle } from 'react-icons/fc';
import useTitle from './Usetitle';

const Register = () => {
    const {createUser,googleLogIn}=useContext(UserIdentity)
    const [liveError, SetLiveError]=useState('')
    const [success, SetSuccess]=useState('')
    useTitle('Register')

    const handleRegister=event=>{
        event.preventDefault()
        const name=event.target.name.value
        const email=event.target.email.value
        const password=event.target.password.value
        const photo=event.target.url.value
        console.log(name,email,password,photo);
        createUser(email,password)
        .then(result=>{
            const loggedUser=result.user
            console.log(loggedUser);
            updateProfile(loggedUser,{displayName:name, photoURL:photo})
            .then(()=>{})
            .catch(error=>{})

            event.target.reset()
            SetSuccess('Successfully Created Account')
        })
        .catch(error=>{
            SetSuccess('')
        })
    }
    const handlePassword=(e)=>{
        const passwordInput=e.target.value
       if(passwordInput.length<6){
        SetLiveError('Please input minimum 6 characters')
        }     
        else{SetLiveError('')}    

    }

    const handleGoogle = () => {
        googleLogIn()
          .then(() => {
          })
          .catch(() =>{});
      };
    return (
<div className="grid md:grid-cols-2 items-center">
          <div className="hidden md:block ">
            <img className="" src='https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?w=826&t=st=1684383214~exp=1684383814~hmac=d25f658fe00374f4d8b6dd3f469da39c13fa198725b4681f6a92c827e8451713' alt="" />
          </div>
          <div className="flex justify-center items-center">
      <div className="w-full max-w-md">
        
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleRegister}
        >
          <p className="text-blue-500 text-2xl text-center font-bold">Register</p>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="name"
              name="name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="email"
              name="email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="url"
            >
              Photo
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="url"
              type="url"
              placeholder="photo url"
              name="url"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input onChange={handlePassword}
              className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="password"
              name="password"
              required
            />
            <p className="text-red-500 font-semibold text-xl">{liveError}</p>
          </div>
          
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Register
            </button>
            <p className='text-green-500 font-semibold text-xl'>{success}</p>
            
            <p>
             Already have an account? Please <Link to='/login' className="font-bold text-sm text-blue-500 hover:text-blue-800">Login</Link>
            </p>
          
        </form>
        <p className='text-center my-3 font-semibold'>or</p>
            <div onClick={handleGoogle} className='flex items-center space-x-2 border shadow-lg rounded-2xl p-2 hover:bg-sky-200 cursor-pointer'>
            <FcGoogle></FcGoogle>
            <p> Sign in with <span>google</span></p>
            </div>
        
      </div>
    </div>
        </div>
    );
};

export default Register;
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { UserIdentity } from "./ContextApi";

const Login = () => {
  const [error, SetError] = useState("");
  const { signIn, googleLogIn} = useContext(UserIdentity);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    SetError("");
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        SetError(errorMessage);
      });
  };
  const handleGoogle = () => {
    googleLogIn()
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch(() =>{});
  };
  return (
    <div>
      <div className="">
        <div className="grid md:grid-cols-2 items-center">
          <div className="hidden md:block ">
            <img className="" src='https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?w=826&t=st=1684383214~exp=1684383814~hmac=d25f658fe00374f4d8b6dd3f469da39c13fa198725b4681f6a92c827e8451713' alt="" />
          </div>
          <div className="flex justify-center items-center">
      <div className="w-full max-w-md">
        
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleLogin}
        >
          <p className="text-blue-500 text-2xl text-center font-bold">Login</p>
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
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="password"
              name="password"
              required
            />
          </div>
          
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
            <p className="text-red-500 font-bold text-2xl">{error}</p>
            <p>
             New to Action Toys? Please <Link to='register' className="font-bold text-sm text-blue-500 hover:text-blue-800">Register</Link>
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
      </div>
    </div>
  );
};

export default Login;

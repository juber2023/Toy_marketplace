import { Link } from "react-router-dom";
import ActiveLink from "./ActiveLink";
import { useContext } from "react";
import { UserIdentity } from "./ContextApi";

const Navbar = () => {
    const {user,logOut}=useContext(UserIdentity)
    const handleLogOut=()=>{
      logOut()
      .then(()=>{})
      .catch(error=>{})
    }
  console.log(user);
  return (
    <nav className=" text-white bg-gradient-to-r bg-sky-500 p-2 sticky top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex justify-center items-center gap-3">
          <img src="https://img.freepik.com/premium-vector/superhero-doing-thumb-up_24381-2002.jpg?w=740" alt="Action Toys Marketplace" className="h-16 w-16 rounded-xl" />
            <Link
              to="/"
              className=" font-bold text-3xl"
            >
                <div className="animate-bounce">
                    <span className="text-yellow-500 animate-bounce inline-block">A</span>
                  <span>ction</span>
                  &nbsp;
                  <span className="text-yellow-500 animate-bounce inline-block">T</span>
                  <span>oys</span>
            </div>
                 
            </Link>
            
          </div>

          <div className="mx-auto space-x-5 hidden md:flex font-bold ">
            <ActiveLink
              to="/"
              className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </ActiveLink>
            <ActiveLink
              to="/allToys"
              className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-base font-medium"
            >
              All Toys
            </ActiveLink>
            <ActiveLink
              to="/blogs"
              className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-base font-medium"
            >
              Blogs
            </ActiveLink>
          </div>

          <div className="hidden md:block font-bold">
            <div className="space-x-4">
              {
              user?
              <div className="flex space-x-4 items-center font-bold">
                <ActiveLink to='/addToy'>Add A Toy</ActiveLink>
                <ActiveLink to='/myToys'>My Toys</ActiveLink>
                <p className="cursor-pointer" onClick={handleLogOut}>Logout</p>
                <img className=" h-12 w-12 rounded-full cursor-pointer" src={user?.photoURL} alt="" title={user?.displayName} />
              </div>
              :
              <div className="space-x-4 font-bold">
                  <ActiveLink to="/register">Register</ActiveLink>
                  <ActiveLink to="/login">Login</ActiveLink>
              </div>
              
              
            }
            </div>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="text-white hover:text-gray-200 focus:focus:outline-sky-400 focus:text-gray-200"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  className="hidden"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                />
                <path
                  className="block"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6 18V6H4v12h2zm3-1V7H7v10h2zm3-1V8H10v8h2zm3-1V9h-2v7h2zm3-1v-6h-2v6h2z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
          <ActiveLink
            to="/"
            className="text-white block hover:text-gray-200 px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </ActiveLink>
          <ActiveLink
            to="/toys"
            className="text-white block hover:text-gray-200 px-3 py-2 rounded-md text-base font-medium"
          >
            Toys
          </ActiveLink>
          <ActiveLink
            to="/cart"
            className="text-white block hover:text-gray-200 px-3 py-2 rounded-md text-base font-medium"
          >
            Cart
          </ActiveLink>
          
                      {
              user?
              <div className="flex space-x-4 items-center">
                <p className="cursor-pointer" onClick={handleLogOut}>Logout</p>
                <img className=" h-12 w-12 rounded-full cursor-pointer" src={user?.photoURL} alt="" title={user?.displayName} />
              </div>
              :
              <div className="space-x-4">
              <ActiveLink to="/register">Register</ActiveLink>
              <ActiveLink to="/login">Login</ActiveLink>
          </div>
              
            }
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

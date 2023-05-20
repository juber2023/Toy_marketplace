
import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';


const Layout = () => {
    const spinner=useNavigation()
    return (
        <div>
            <Navbar></Navbar>
            <div >{spinner.state==='loading'?<div className='flex text-7xl h-[calc(100vh-100px)] justify-center items-center font-light'>
                <p>L</p>
                <p className='animate-spin w-10 h-10 border-8 border-sky-700 border-dotted rounded-full mt-5'></p>
                <p>ading...</p>
            </div>:''}</div>

            <div className='md:w-3/4 mx-auto min-h-[calc(100vh-515px)]'>
            <Outlet></Outlet>
            </div>

            <div className=''>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Layout;
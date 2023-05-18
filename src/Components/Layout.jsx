
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';


const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='md:w-3/4 mx-auto'>

            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Layout;
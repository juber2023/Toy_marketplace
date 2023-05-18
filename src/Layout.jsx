import Navbar from './Components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer';

const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='w-3/4 mx-auto'>

            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Layout;
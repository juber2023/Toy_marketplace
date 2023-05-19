import { Link } from 'react-router-dom';
import useTitle from './Usetitle';

const ErrorPage = () => {
    useTitle('Error')
    return (
        <div className='flex justify-center items-center flex-col h-screen'>
            <div >
                <img className='h-96' src="https://img.freepik.com/free-vector/404-error-with-tired-person-concept-illustration_114360-7869.jpg?w=826&t=st=1684394373~exp=1684394973~hmac=8e9af6b1ccd2be0fe4a7147f454f831af9486ef3f5535fd10c995d8f7e2c8877" alt="" />
            </div>
            <button className='button'>
                <Link to='/'>Back to home</Link>
            </button>
        </div>
    );
};

export default ErrorPage;
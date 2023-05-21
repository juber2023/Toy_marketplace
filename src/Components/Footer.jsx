
import { Link } from 'react-router-dom';
import { ImFacebook, ImInstagram, ImLinkedin, ImTwitter} from "react-icons/im";
import img from '../assets/react.svg'

const Footer = () => {
    return (
        <footer className="bg-gray-900 pt-4 pb-0 mt-5">
        <div className="grid md:grid-cols-3 text-white w-3/4 mx-auto ">
        <div className="flex flex-col  items-start">
              <Link
              to="/"
              className=" font-bold text-3xl text-white"
            >
                <div className="animate-bounce">
                    <span className="text-lime-400 animate-bounce inline-block">A</span>
                  <span>ction</span>
                  &nbsp;
                  <span className="text-lime-400 animate-bounce inline-block">T</span>
                  <span>oys</span>
            </div>
                 
            </Link>
            <div className='ml-10'><img src={img} alt="Action Toys Marketplace" className='h-14' /></div>
                
                
              </div>
              <div className='flex flex-col md:items-center my-4 md:my-0'> 
              <ul>
              <li className="text-lg font-bold mb-2">Opening Time</li>
              <li>Monday: 9am - 5pm</li>
              <li>Tuesday: 9am - 5pm</li>
              <li>Wednesday: 9am - 5pm</li>
              <li>Thursday: 9am - 5pm</li>
              <li>Friday: 9am - 5pm</li>
              <li>Saturday & Sunday: Closed</li>
            </ul>

              </div>
              
            <div className='md:text-end '>
            <h3 className="text-lg font-bold mb-2">Contact</h3>
            <p className="text-sm">Rajshahi</p>
            <p className="text-sm">Naogaon,Mohadevpur</p>
            <p className="text-sm">Email: juber.eco@gmail.com</p>
            <p className="text-sm">Phone: +8801748427227</p>
            <div className="flex justify-center mt-3 md:justify-end">
            <ul className="flex space-x-4 text-sky-500  ">
              <li><Link to='https://www.facebook.com/'><ImFacebook></ImFacebook></Link></li>
              <li><Link to='https://twitter.com/'><ImTwitter></ImTwitter></Link></li>
              <li><Link to='https://www.instagram.com/'><ImInstagram></ImInstagram></Link></li>
              <li><Link to='https://www.linkedin.com/'><ImLinkedin></ImLinkedin></Link></li>
            </ul>
          </div>
          </div>
       
        </div>
     

          
        <div className="bg-gray-800 py-2">
          <div className="container mx-auto text-center text-gray-400 text-sm">
            &copy; 2023 Action Toys Marketplace. All rights reserved.
          </div>
        </div>
      </footer>
    );
};

export default Footer;
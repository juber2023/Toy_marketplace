
import { Link } from 'react-router-dom';
import { ImFacebook, ImInstagram, ImLinkedin, ImTwitter} from "react-icons/im";

const Footer = () => {
    return (
        <footer className="bg-gray-900 py-8 ">
        <div className="grid md:grid-cols-3 text-white w-3/4 mx-auto ">
        <div className="">
              <Link
              to="/"
              className=" font-bold text-3xl text-white"
            >
                <div className="animate-bounce">
                    <span className="text-yellow-500 animate-bounce inline-block">A</span>
                  <span>ction</span>
                  &nbsp;
                  <span className="text-yellow-500 animate-bounce inline-block">T</span>
                  <span>oys</span>
            </div>
                 
            </Link>
                <img src="https://img.freepik.com/premium-vector/superhero-doing-thumb-up_24381-2002.jpg?w=740" alt="Action Toys Marketplace" className="h-52 rounded-xl" />
                
              </div>
              <div className='flex flex-col items-center'> 
              <ul>
              <li className="text-lg font-bold mb-2">Opening Time</li>
              <li>Monday: 9am - 5pm</li>
              <li>Tuesday: 9am - 5pm</li>
              <li>Wednesday: 9am - 5pm</li>
              <li>Thursday: 9am - 5pm</li>
              <li>Friday: 9am - 5pm</li>
              <li>Saturday: Closed</li>
              <li>Sunday: Closed</li>
            </ul>

              </div>
              
            <div className='text-end'>
            <h3 className="text-lg font-bold mb-2">Contact</h3>
            <p className="text-sm">Email: info@example.com</p>
            <p className="text-sm">Phone: +1 123-456-7890</p>
          </div>
       
        </div>
     
          <div className="flex justify-center">
            <ul className="flex space-x-4 text-white ">
              <li><Link to='https://www.facebook.com/'><ImFacebook></ImFacebook></Link></li>
              <li><Link to='https://twitter.com/'><ImTwitter></ImTwitter></Link></li>
              <li><Link to='https://www.instagram.com/'><ImInstagram></ImInstagram></Link></li>
              <li><Link to='https://www.linkedin.com/'><ImLinkedin></ImLinkedin></Link></li>
            </ul>
          </div>
          
        <div className="bg-gray-800 py-2">
          <div className="container mx-auto text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Action Toys Marketplace. All rights reserved.
          </div>
        </div>
      </footer>
    );
};

export default Footer;
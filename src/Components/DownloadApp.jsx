
import { Link } from 'react-router-dom';
import img from '../assets/react.svg'

const DownloadApp = () => {
    return (
        <div className='mt-10'>
            <section className="bg-gray-100 py-2">
      <div className=" mx-auto">
        <div className=" mx-auto flex items-center justify-center">
          <div className="mr-10">
            <img src={img} alt="App Store" className="w-20" />
          </div>
          <div className="flex flex-col" data-aos="zoom-in"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Download Our App</h2>
            <p className="text-gray-600 mb-6">Get the best toy shopping experience with our mobile app.</p>
            <div className="flex space-x-4">
              <Link to="https://play.google.com/store/games" className="flex items-center bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg">
                <span className="mr-2">Download on the</span>
                <img src='https://cdn-icons-png.flaticon.com/512/300/300218.png?w=826&t=st=1684587828~exp=1684588428~hmac=378bef314afea3ad4ecbddaab280a8b55191a948a1b3056050a0b6d86a045e39' alt="App Store" className="w-8" />
              </Link>
              <Link to="https://www.apple.com/store" className="flex items-center bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg">
                <span className="mr-2">Get it on</span>
                <img src='https://cdn-icons-png.flaticon.com/512/831/831329.png?w=826&t=st=1684587946~exp=1684588546~hmac=cd0cf2599cd82ef948d6af2132c447e64518c64ae84828a09e01bbdf11d67939' alt="Google Play" className="w-8" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
        </div>
    );
};

export default DownloadApp;
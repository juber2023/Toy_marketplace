import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'



const ToysTab = ({toys}) => {
    const [activeTab, setActiveTab] = useState(toys[0].category);

    const categories = [...new Set(toys.map(item => item.category))];
  
    const handleTabClick = (category) => {
      setActiveTab(category);
    console.log(toys);

    useEffect(() => {
      AOS.init({
        duration: 1000, // Specify the animation duration (in milliseconds)
      });
    }, []);
    };

    return (
        <div className="container mx-auto ">
          <h1 className="text-2xl font-bold text-center my-5">Toy Category</h1>
      <div className="flex">
        <div className="w-full">
          <div className="flex">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`flex-1 px-4 py-2 text-sm ${
                  activeTab === category ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                }`}
                onClick={() => handleTabClick(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="mt-4 grid md:grid-cols-3 gap-10 ">
            {toys.map((item, index) => (
              item.category === activeTab && (
                <div key={index} className="p-5 shadow-lg" data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000" >
                  <img className="h-56 w-full" src={item.img} alt={item.name} />
                  <h2 className="font-bold text-xl">{item.name}</h2>
                  <p>Price: ${item.price}</p>
                  {/* <p>Rating: {item.rating}</p> */}
                  <div>
                  <Rating
                            style={{ maxWidth: 150 }}
                            value={Math.round(item.rating?item.rating:0)}
                            readOnly
                        />
                  </div>
                  <Link to={`/toy/${item._id}`} ><button className="button mt-5">View details</button></Link>
                  
                </div>
              )
            ))}
          </div>
        </div>
      </div>
    </div>
    );
};

export default ToysTab;
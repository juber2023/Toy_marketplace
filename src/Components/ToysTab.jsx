import { useState } from "react";


const ToysTab = ({toys}) => {
    const [activeTab, setActiveTab] = useState(toys[0].category);

    const categories = [...new Set(toys.map(item => item.category))];
  
    const handleTabClick = (category) => {
      setActiveTab(category);
    console.log(toys);
    };
    return (
        <div className="container mx-auto">
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
          <div className="mt-4 grid md:grid-cols-3 gap-10">
            {toys.map((item, index) => (
              item.category === activeTab && (
                <div key={index} className="p-5 shadow-lg">
                  <img className="h-60 w-full" src={item.img} alt={item.name} />
                  <h2 className="font-bold text-xl">{item.name}</h2>
                  <p>Price: {item.price}</p>
                  <p>Rating: {item.rating}</p>
                  <button className="button mt-5">View details</button>
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
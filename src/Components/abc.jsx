import React from 'react';

const abc = () => {
    return (
        <div>
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

              <ul className="text-sm">
              <li>Monday: 9am - 5pm</li>
              <li>Tuesday: 9am - 5pm</li>
              <li>Wednesday: 9am - 5pm</li>
              <li>Thursday: 9am - 5pm</li>
              <li>Friday: 9am - 5pm</li>
              <li>Saturday: Closed</li>
              <li>Sunday: Closed</li>
            </ul>

            <div>
            <h3 className="text-lg font-bold mb-2">Contact</h3>
            <p className="text-sm">Email: info@example.com</p>
            <p className="text-sm">Phone: +1 123-456-7890</p>
          </div>
        </div>
    );
};

export default abc;
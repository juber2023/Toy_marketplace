import { Link, useLoaderData } from "react-router-dom";
import useTitle from "./Usetitle";
import { useState } from "react";

const AllToys = () => {
  const toys = useLoaderData();
  const limitToys = toys.splice(1, 20);
  const [search, SetSearch] = useState(limitToys);

  const handleSearch = (event) => {
    event.preventDefault();
    const inputName = event.target.name.value;
    const filterSearch = limitToys.filter((f)=>
      f.name.toUpperCase()===inputName.toUpperCase());
    SetSearch(filterSearch);
    console.log(filterSearch);
  };
  useTitle("All Toys");
  return (
    <div>
      <form
        onSubmit={handleSearch}
        className="flex my-10 space-x-5 w-2/4 mx-auto sticky top-20 z-50"
      >
        <input
          type="text"
          name="name"
          placeholder="Search by name"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:focus:outline-sky-400 focus:shadow-outline bg-gray-200"
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>

      <table className="lg:min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Serial
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Seller
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Toy Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Category
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Price
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Available
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {search.map((item, index) => (
            <tr key={item._id}>
              <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.sellerName}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.category}</td>
              <td className="px-6 py-4 whitespace-nowrap">${item.price}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.available}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <Link to={`/toy/${item._id}`}>
                  <button className="button mt-5">View details</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;

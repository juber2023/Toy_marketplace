import { Link, useLoaderData } from "react-router-dom";
import { UserIdentity } from "./ContextApi";
import { useContext, useState } from "react";
import Swal from "sweetalert2";


const MyToys = () => {
    const {user}=useContext(UserIdentity)
    const toys=useLoaderData()
    
    const userEmail=user?.email;
    console.log(userEmail);
    const SellerToys=toys.filter(f=>userEmail===f.sellerEmail)
    const [allToys, SetAllToys]=useState(SellerToys)
    

    const handleDelete=(id)=>{
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
        fetch(`http://localhost:5000/toy/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                const remaining=allToys.filter(c=>c._id!==id)
                console.log(remaining);
                SetAllToys(remaining)
            }
        })
        }
      })
    }
    

    return (
        <div>
      <table className="border-collapse w-full">
        <thead>
          <tr>
            <th className="p-2 border border-gray-300">Serial</th>
            <th className="p-2 border border-gray-300">Photo</th>
            <th className="p-2 border border-gray-300">Name</th>
            <th className="p-2 border border-gray-300">Price</th>
            <th className="p-2 border border-gray-300">Available</th>
            <th className="p-2 border border-gray-300">Details</th>
            <th className="p-2 border border-gray-300">Actions</th>
          </tr>
        </thead>
        <tbody>
          {allToys.map((toy, index) => (
            <tr key={toy._id} className="text-center">
              <td className="p-2 border border-gray-300">{index + 1}</td>
              <td className="p-2 border border-gray-300">
                <img
                  src={toy.img}
                  alt={toy.name}
                  className="w-2/3 h-28 rounded mx-auto"
                />
              </td>
              <td className="p-2 border border-gray-300">{toy.name}</td>
              <td className="p-2 border border-gray-300">{toy.price}</td>
              <td className="p-2 border border-gray-300">{toy.available}</td>
              <td className="p-2 border border-gray-300">{toy.details}</td>
              <td className="p-2 border border-gray-300">
                <Link to={`/update/${toy._id}`}><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                  Update
                </button></Link>
                
                <button onClick={()=>handleDelete(toy._id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
};

export default MyToys;
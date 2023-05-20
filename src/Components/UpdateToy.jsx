import { useLoaderData, useNavigate} from "react-router-dom";
import Swal from "sweetalert2";


const UpdateToy = () => {
    const toys=useLoaderData()
    const {_id,price,available,details,img}=toys
    const navigate=useNavigate()
    const handleUpdateToy=event=>{
        event.preventDefault()
        const form=event.target;
        const price=form.price.value
        const available=form.available.value
        const details=form.description.value
        const newToy={price, available, details}

        fetch(`http://localhost:5000/toy/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(newToy)
            
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount===0){
                alert('Please Edit Any Field')
              }
            if(data.modifiedCount>0){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Successfully Updated',
                    showConfirmButton: false,
                    timer: 2000
                  })
                  navigate('/myToys')
                 
            }
        })

    }
    return (
        <div className="grid md:grid-cols-2 mt-5 items-center gap-5">
            <div>
                <img src={img} alt="image not found" className="rounded-lg" />
            </div>
            <div>
            <form onSubmit={handleUpdateToy} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <p className="text-blue-500 text-2xl text-center font-bold">Update Your Toy</p> 
            <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="price"
            >
              Price
            </label>
            <input
              className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-gray-700 leading-tight focus:focus:outline-sky-400 focus:shadow-outline"
              id="price"
              type="number"
              placeholder="price"
              name="price"
              min={1}
              defaultValue={price}
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="available"
            >
              Available
            </label>
            <input
              className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-sky-400 focus:shadow-outline"
              id="available"
              type="number"
              placeholder="available quantity"
              min={1}
              name="available"
              defaultValue={available}
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <input
              className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-gray-700 leading-tight focus:focus:outline-sky-400 focus:shadow-outline"
              id="description"
              type="text"
              placeholder="about your toy"
              name="description"
              defaultValue={details}
              required
            />
          </div>

          <button
              className="button mt-6"
              type="submit"
            >
              Update
            </button>
            </form>
            </div>
        </div>
    );
};

export default UpdateToy;
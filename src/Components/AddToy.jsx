import { useContext } from "react";
import { UserIdentity } from "./ContextApi";
import Swal from "sweetalert2";
import useTitle from "./Usetitle";

const AddToy = () => {
    const {user}=useContext(UserIdentity)
    useTitle('Add A Toy')
    const handleAddToy=(event)=>{
        event.preventDefault()
        const form=event.target;
        const img=form.url.value
        const name=form.name.value
        const price=form.price.value
        const available=form.available.value
        const rating=form.rating.value
        const category=form.category.value
        const details=form.description.value
        const sellerName=user?.displayName
        const sellerEmail=user?.email
        const newToy={img, name, price, available, rating, category,details, sellerName,sellerEmail};

        fetch('https://toy-server-assignment11.vercel.app/toys',{
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(newToy)
            
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Successfully Toy Added',
                    showConfirmButton: false,
                    timer: 2000
                  })
            }
            form.reset()
        })
    }
    
    return (
        <div className="grid md:grid-cols-2 items-center gap-3">
            <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
                <img src="https://img.freepik.com/premium-vector/cartoon-little-boy-playing-with-many-toys_29190-7169.jpg?w=900" alt="" />
            </div>
            <div>
            <form onSubmit={handleAddToy}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          
        >
          <p className="text-blue-500 text-2xl text-center font-bold">Add Your Toy</p>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="url"
            >
              Photo
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:focus:outline-sky-400 focus:shadow-outline"
              id="url"
              type="url"
              placeholder="photo url"
              name="url"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Toy Name
            </label>
            <input
              className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-gray-700 leading-tight focus:focus:outline-sky-400 focus:shadow-outline"
              id="name"
              type="text"
              placeholder="name"
              name="name"
              required
            />
          </div>

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
              required
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="rating"
            >
              Rating
            </label>
            <input
              className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-gray-700 leading-tight focus:focus:outline-sky-400 focus:shadow-outline"
              id="rating"
              type="number"
              placeholder="(1-5)"
              min={1}
              max={5}
              step="any"
              name="rating"
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
              required
            />
          </div>
          <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="rating"
            >
              Category
            </label>
          <label className="block">
          <select className="form-select mt-1 block w-full shadow appearance-none border border-red rounded py-2 px-3 text-gray-700 leading-tight focus:focus:outline-sky-400 focus:shadow-outline" name='category' required>
            <option value="">Select Category </option>
            <option value="Marvel">Marvel</option>
            <option value="Transformers">Transformers</option>
            <option value="Avengers">Avengers</option>
            <option value="Star wars">Star wars</option>
          </select>
        </label>
          
          
            <button
              className="button mt-6"
              type="submit"
            >
              Add Toy
            </button>
           
          
        </form>
            </div>
        </div>
    );
};

export default AddToy;
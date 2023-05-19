import { useLoaderData } from "react-router-dom";
import useTitle from "./Usetitle";

const ToyDetails = () => {
    const toy=useLoaderData()
    useTitle('Toy Details')
    
    return (
        <div className="grid md:grid-cols-2 mt-5 gap-5 items-center">
            <div><img className="rounded-lg " src={toy.img} alt="" /></div>
            <div className="p-10 shadow-lg">
                <p className="font-bold text-2xl">{toy.name}</p>
                <p> <span className="font-semibold text-xl">Category:</span>  {toy.category}</p>
                <p> <span className="font-semibold text-xl">Price:</span> {toy.price}</p>
                <p><span className="font-semibold text-xl">Available:</span> {toy.available}</p>
                <p><span className="font-semibold text-xl">Description:</span> {toy.details}</p>
            </div>
        </div>
    );
};

export default ToyDetails;
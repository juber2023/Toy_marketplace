import { useLoaderData } from "react-router-dom";
import useTitle from "./Usetitle";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const ToyDetails = () => {
    const toy=useLoaderData()
    useTitle('Toy Details')
    
    return (
        <div className="grid md:grid-cols-2 mt-5 gap-5 items-center">
            <div><img className="rounded-lg " src={toy.img} alt="" /></div>
            <div className="p-10 shadow-lg bg-sky-700 text-white rounded-lg">
            <div className="text-center mb-5">
            {toy?.sellerName?<p className="font-bold text-2xl">Seller: {toy.sellerName}</p>:''}
            {toy?.sellerEmail?<p className="font-bold text-2xl">Email: {toy.sellerEmail}</p>:''}
            </div>
                <p className="font-bold text-2xl">Toy: {toy.name}</p>
                <p> <span className="font-semibold text-xl">Category:</span>  {toy.category}</p>
                <p> <span className="font-semibold text-xl">Price:</span> ${toy.price}</p>
                <p><span className="font-semibold text-xl">Available:</span> {toy.available}</p>
                <p>
                <Rating
                            style={{ maxWidth: 150 }}
                            value={Math.round(toy.rating?toy.rating:0)}
                            readOnly
                        />
                </p>
                <p><span className="font-semibold text-xl">Description:</span> {toy.details}</p>
            </div>
        </div>
    );
};

export default ToyDetails;
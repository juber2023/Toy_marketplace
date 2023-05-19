import { Link, useLoaderData } from "react-router-dom";

const AllToys = () => {
  const toys = useLoaderData();
  console.log(toys);
  return (
    <div className="grid md:grid-cols-2 gap-5">
      {toys.map((toy) => {
        return (
          <div key={toy._id}>
            <div className="card lg:card-side bg-base-100 shadow-xl">
              <figure>
                <img
                  src={toy.img}
                  alt="Album"
                  className="h-56"
                />
              </figure>
              <div className="card-body">
              <p className="font-bold text-2xl">{toy.name}</p>
                <p> <span className="font-semibold text-xl">Category:</span>  {toy.category}</p>
                <p> <span className="font-semibold text-xl">Price:</span> {toy.price}</p>
                <p><span className="font-semibold text-xl">Available:</span> {toy.available}</p>
                <div className="card-actions justify-end">
                <Link to={`/toy/${toy._id}`} ><button className="button mt-5">View details</button></Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllToys;

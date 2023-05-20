

const Popular = () => {
    return (
        <section className="bg-gray-100 py-12 mt-5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Popular Toys</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Toy Card 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-110 duration-150">
            <img  src="https://img.freepik.com/premium-photo/fun-modern-superhero-illustration_183364-227.jpg?w=740" alt="Toy 1" className="w-full h-48 " />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">Toy 1</h3>
              <p className="text-gray-600 mt-2">Sold: 50P</p>
              <div className="mt-4">
                <span className="text-gray-800 font-semibold">$19.99</span>
                <button className="bg-blue-500 text-white px-2 py-1 ml-2 rounded">Add to Cart</button>
              </div>
            </div>
          </div>
          {/* Toy Card 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-110 duration-150">
            <img src="https://img.freepik.com/free-vector/happy-businessman-rocket_23-2147621034.jpg?w=826&t=st=1684424011~exp=1684424611~hmac=1e954d225f5a0e547c30efdb4e929f0836dc6cc78ee3a44ecd45c1db2bd9f5d6" alt="Toy 2" className="w-full h-48 " />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">Toy 2</h3>
              <p className="text-gray-600 mt-2">Sold: 40P</p>
              <div className="mt-4">
                <span className="text-gray-800 font-semibold">$24.99</span>
                <button className="bg-blue-500 text-white px-2 py-1 ml-2 rounded">Add to Cart</button>
              </div>
            </div>
          </div>
          {/* Toy Card 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-110 duration-150">
            <img src="https://img.freepik.com/free-vector/happy-funny-vampire_74855-603.jpg?w=826&t=st=1684423834~exp=1684424434~hmac=c6715b3f8af412a1360a6b073eec7c57cc5b95dee09bde7d239694660b21b724" alt="Toy 3" className="w-full h-48 " />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">Toy 3</h3>
              <p className="text-gray-600 mt-2">Sold: 100P</p>
              <div className="mt-4">
                <span className="text-gray-800 font-semibold">$14.99</span>
                <button className="bg-blue-500 text-white px-2 py-1 ml-2 rounded">Add to Cart</button>
              </div>
            </div>
          </div>
          {/* Toy Card 4 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-110 duration-150">
            <img src="https://img.freepik.com/free-vector/cute-boy-riding-dinosaur-cartoon-vector-icon-illustration-people-animal-icon-concept-isolated-flat_138676-7773.jpg?w=826&t=st=1684423787~exp=1684424387~hmac=7da9ffb6fc2d238126090a99c202a5b8a52238dcc1ad79b1656333de836bf539" alt="Toy 4" className="w-full h-48 " />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">Toy 4</h3>
              <p className="text-gray-600 mt-2">Sold: 80P</p>
              <div className="mt-4">
                <span className="text-gray-800 font-semibold">$29.99</span>
                <button className="bg-blue-500 text-white px-2 py-1 ml-2 rounded">Add to Cart</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};

export default Popular;
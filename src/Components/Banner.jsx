import useTitle from "./Usetitle";

const Banner = () => {
    useTitle('Home')
    return (
        <div className="h-[calc(100vh-100px)]">
              <div  className="relative ">
    <img src='https://img.freepik.com/free-vector/superhero-sky-frame_1308-26828.jpg?w=996&t=st=1684407689~exp=1684408289~hmac=4f907901a82dcb8c402666cc8b96e9283664c3f2e4d5c6fadcb2cd59dbc2c903' className="w-full h-[calc(100vh-100px)]" />
    <div className="absolute top-0 flex items-center w-full h-[calc(100vh-100px)] text-white  bg-gradient-to-t from-[#151515] to-[rgba(21, 21, 21, 0)]">
        <div className="mx-auto w-1/3">
        <p className='font-bold text-2xl md:text-4xl'>All Action Toys is waiting for you</p>
        <p className='my-5'>Wanna be a super hero? Then contact with us.</p>
        <button className="button">Latest Toys</button>
        </div>
    </div>
  </div>
        </div>
    );
};

export default Banner;
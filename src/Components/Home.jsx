import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import ToysTab from "./ToysTab";
import Gallery from "./Gallery";
import Popular from "./Popular";



const Home = () => {
    const toys=useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <Gallery toys={toys}></Gallery>
            <ToysTab toys={toys}></ToysTab>
            <Popular toys={toys}></Popular>
            
        </div>
    );
};

export default Home;
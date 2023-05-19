import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import ToysTab from "./ToysTab";
import Gallery from "./Gallery";



const Home = () => {
    const toys=useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <Gallery toys={toys}></Gallery>
            <ToysTab toys={toys}></ToysTab>
        </div>
    );
};

export default Home;
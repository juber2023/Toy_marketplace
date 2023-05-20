import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import ToysTab from "./ToysTab";
import Gallery from "./Gallery";
import Popular from "./Popular";
import DownloadApp from "./DownloadApp";



const Home = () => {
    const toys=useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <Gallery toys={toys}></Gallery>
            <Popular toys={toys}></Popular>
            <ToysTab toys={toys}></ToysTab>
            <DownloadApp></DownloadApp>
            
        </div>
    );
};

export default Home;
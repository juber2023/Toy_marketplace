import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import ToysTab from "./ToysTab";


const Home = () => {
    const toys=useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <ToysTab toys={toys}></ToysTab>
        </div>
    );
};

export default Home;
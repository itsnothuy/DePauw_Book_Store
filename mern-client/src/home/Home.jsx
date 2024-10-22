import React from "react";
import Banner from "../components/Banner";
import BestSellBooks from "./BestSellBooks";
import FavBook from "./FavBook";

const Home = () => {
    return (
        <div>
            <Banner />
            <BestSellBooks />
            <FavBook />
        </div>
    )
}
export default Home
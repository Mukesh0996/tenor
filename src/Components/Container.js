import React from "react";
import FeaturedGifs from "./FeaturedGifs/FeaturedGifs";
import Trending from "./Trending/Trending";



const Container = () => {

    return <React.Fragment>
            <Trending/>
            <FeaturedGifs/>
           </React.Fragment>


}


export default Container;
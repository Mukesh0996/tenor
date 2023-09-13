import React, { useEffect, useState } from 'react';
import TrendingStyles from './Trending.module.css';
import { trendingURL } from '../../Utils/API';
import Gif from '../Gif/GIf';
import Carousel from '../Carousel/Carousel';
import useFetch from '../../Hooks/useFetch';
import Loading from '../Loading/Loading';


const Trending = () => {

    const [trendingGifs, setTrendingGifs] = useState([]);


    const {sendRequest, isLoading} = useFetch(trendingURL)
  
    const fetchTrending = async () => {

        const resp = await sendRequest();
        setTrendingGifs(resp.results);

    };

    useEffect(() => {
        fetchTrending();

    },[]);

    return <React.Fragment>
                { isLoading && <Loading/> }
                <div className={TrendingStyles.trendingContainer}>
                    <h3>Trending Tenor Searches</h3>
                        <Carousel> 
                            { 
                                trendingGifs.map((gif, index)=> <Gif key={index} gifUrl={gif.media[0].gif.url} desc={gif.content_description}/>) 
                            } 
                        </Carousel>
                </div>  
        </React.Fragment>
    
}

export default Trending;
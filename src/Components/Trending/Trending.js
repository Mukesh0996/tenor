import { useEffect, useState } from 'react';
import TrendingStyles from './Trending.module.css';
import { trendingURL } from '../../utils/API';
import GIf from '../Gif/GIf';
import Carousel from '../Carousel/Carousel';


const Trending = () => {

    const [trendingGifs, setTrendingGifs] = useState([]);
  
    const fetchTrending = async () => {

        const resp = await fetch(trendingURL,{
            method:"GET"
        });
        const res = await resp.json();
        setTrendingGifs(res.results);

    };

    useEffect(() => {

        fetchTrending();

    },[]);

    return <div className={TrendingStyles.trendingContainer}>
                <h3>Trending Tenor Searches</h3>
                    <Carousel> 
                        { 
                            trendingGifs.map((gif, index)=> <GIf key={index} gifUrl={gif.media[0].gif.url} desc={gif.content_description}/>) 
                        } 
                    </Carousel>
            </div>  
}

export default Trending;
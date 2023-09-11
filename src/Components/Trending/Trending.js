import { useEffect } from 'react';
import TrendingStyles from './Trending.module.css';
import { trendingURL } from '../../utils/API';


const Trending = () => {


    const fetchTrending = async () => {

        const resp = await fetch(trendingURL,{
            method:"GET"
        });

        const res = await resp.json();
        console.log(res);
      
    };

    useEffect(() => {
        fetchTrending();
    },[]);


    return <div className={TrendingStyles.trendingContainer}>
                <h3>Trending Tenor Searches</h3>
                <div className={TrendingStyles.carousel}>
                    
                </div>
            </div>  
}

export default Trending;
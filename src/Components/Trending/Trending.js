import React, { useContext, useEffect, useState } from 'react';
import TrendingStyles from './Trending.module.css';
import Carousel from '../Carousel/Carousel';
import useFetch from '../../Hooks/useFetch';
import Loading from '../Loading/Loading';
import { Link } from 'react-router-dom';
import { AppContext } from '../../Store/SearchContext';


const Trending = () => {

    const [trendingGifs, setTrendingGifs] = useState([]);
    const { stateDispatcher } =  useContext(AppContext)

    const {sendRequest, isLoading} = useFetch(process.env.react_app_tenor_trending_url)
  
    const fetchTrending = async () => {

        const resp = await sendRequest();
        setTrendingGifs(resp.results);

    };

    useEffect(() => {
        fetchTrending();

    },[]);

    let Trending = trendingGifs.map((gif, index)=> {
                    let path = gif.content_description.split(" ").join("-");

                  return <div className={TrendingStyles.t_gif} key={index} onClick={(e)=> { stateDispatcher({ type: 'SET_PREVIEW_GIF', value: { gifUrl:gif.media[0].gif.url, description: gif.content_description } })}}>
                            <Link to={`/preview-gif/${path}`}>
                                <div style={{backgroundImage:`url(${gif.media[0].gif.url})`}} className={TrendingStyles.preview}></div>
                            </Link>
                            <b>{gif.content_description}</b>
                        </div>

    })

    return <React.Fragment>
                { isLoading && <Loading/> }
                <div className={TrendingStyles.trendingContainer}>
                    <h3>Trending Tenor Searches</h3>
                        <Carousel> 
                            { 
                            Trending
                            } 
                        </Carousel>
                </div>  
        </React.Fragment>
    
}

export default Trending;
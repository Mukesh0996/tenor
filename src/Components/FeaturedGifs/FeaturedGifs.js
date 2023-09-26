import React, { createRef, useEffect, useState } from 'react';
import useFetch from '../../Hooks/useFetch';
import FeaturedGifsStyles from './FeaturedGifs.module.css';
import Gif from '../Gif/GIf';
import Loading from '../Loading/Loading';
import useObserver from '../../Hooks/useObserver';


const FeaturedGifs = () => {

    const [num, setNum] = useState("");
    const [featuredGifs, setFeaturedGifs] = useState([]);
    let Giff = createRef();

    const {sendRequest, isLoading} = useFetch(process.env.react_app_tenor_feature_url, num);   //append num to the url such that pos=num

    const fetchFeaturedGifs = async () => {

        let resp =  await sendRequest(); //send API request
        setNum(resp.next)// store num to fetch the next set of featured gifs for the next API call
        setFeaturedGifs(featuredGifs.concat(resp.results));
    }

    const { observer } = useObserver(fetchFeaturedGifs, isLoading);

    useEffect(() => {
            fetchFeaturedGifs();
    },[]);


    useEffect (() => {

            if(Giff.current !== null) {

            observer.observe(Giff.current);

            }

            return () => observer.disconnect();
    }, [Giff])

    const scrollHandler = (e) => {
        e.preventDefault();
    }

    return <React.Fragment>
                { isLoading && <Loading/>}
                <div className={FeaturedGifsStyles.featuredGifContainer}>
                    <h3>Featured Gifs</h3>
                    <div className={FeaturedGifsStyles.featuredGifs} onScroll={scrollHandler}>
                        {
                            featuredGifs.map((gif, index) => {

                                if(featuredGifs.length === index + 1 ) {

                                    return <Gif ref={Giff} key={index} gifUrl={gif.media[0].gif.url}  desc={gif.content_description}/> 
                        
                                } else {
                        
                                    return  <Gif key={index} gifUrl={gif.media[0].gif.url}  desc={gif.content_description}/>    
                                }
                                        
                            })
                        }
                    </div>
                </div>
            </React.Fragment>
}

export default FeaturedGifs;
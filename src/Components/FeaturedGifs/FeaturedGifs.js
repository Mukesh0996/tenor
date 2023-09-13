import React, { createRef, useEffect, useState } from 'react';
import { featuredURL } from '../../Utils/API';
import useFetch from '../../Hooks/useFetch';
import FeaturedGifsStyles from './FeaturedGifs.module.css';
import Gif from '../Gif/GIf';
import Loading from '../Loading/Loading';


const FeaturedGifs = () => {

    const [num, setNum] = useState("");
    const [featuredGifs, setFeaturedGifs] = useState([]);
    const [isShown, setIsShown] = useState(false);

    let Giff = createRef();
    const {sendRequest, isLoading} = useFetch(featuredURL, num);     //append num to the url such that pos=num

    const fetchFeaturedGifs = async () => {

        let resp =  await sendRequest();         //send API request
        setNum(resp.next)
        setFeaturedGifs(featuredGifs.concat(resp.results));
    }

    const observer = new IntersectionObserver(entries => {

        let intersecting =  entries[0].isIntersecting;
        setIsShown(intersecting);

        if(isShown && !isLoading) {
            fetchFeaturedGifs();
        }

    });

    useEffect(() => {
            fetchFeaturedGifs();
    },[]);

    useEffect (() => {
            if(Giff.current !== null) {
            observer.observe(Giff?.current);
            }
    }, [Giff])

    return <React.Fragment>
                { isLoading && <Loading/>}
                <div className={FeaturedGifsStyles.featuredGifContainer}>
                    <h3>Featured Gifs</h3>
                    <div className={FeaturedGifsStyles.featuredGifs}>
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
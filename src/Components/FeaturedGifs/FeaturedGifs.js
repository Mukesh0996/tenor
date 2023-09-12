import { createRef, useEffect, useState } from 'react';
import { featuredURL } from '../../Utils/API';
import useFetch from '../../Hooks/useFetch';
import FeaturedGifsStyles from './FeaturedGifs.module.css';
import GIf from '../Gif/GIf';
import Loading from '../Loading/Loading';


const FeaturedGifs = () => {

    const [useNum, setNum] = useState("");
    const [featuredGifs, setFeaturedGifs] = useState([]);
    const [isShown, setIsShown] = useState(false);

    let Giff = createRef();
    const {sendRequest, isLoading} = useFetch(featuredURL, useNum);

    const fetchFeaturedGifs = async () => {
        //sending API request
        let resp =  await sendRequest();
        setNum(resp.next)
        setFeaturedGifs(featuredGifs.concat(resp.results));
    }

    const observer = new IntersectionObserver(entries => {

        let intersecting =  entries[0].isIntersecting;
        setIsShown(intersecting);

        if(isShown) {
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

    // setInitialRender(true);

    return <div className={FeaturedGifsStyles.featuredGifContainer}>
            {isLoading && <Loading/>}
                <h3>Featured Gifs</h3>
                <div className={FeaturedGifsStyles.featuredGifs}>
                        {
                            featuredGifs.map((gif, index) => {

                                if(featuredGifs.length === index + 1 ) {

                                    return <GIf ref={Giff} key={index} gifUrl={gif.media[0].gif.url}  desc={gif.content_description}/> 
                        
                                } else {
                        
                                    return  <GIf key={index} gifUrl={gif.media[0].gif.url}  desc={gif.content_description}/>    
                                }
                                        
                            })
                        }
                </div>
            </div>

}

export default FeaturedGifs;
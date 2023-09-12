import { useEffect } from 'react';
import { featuredURL } from '../../utils/API';
import useFetch from '../Hooks/useFetch';
import FeaturedGifsStyles from './FeaturedGifs.module.css';



const FeaturedGifs = () => {

    const {sendRequest, isLoading} = useFetch(featuredURL);


    useEffect(  () => {
        
        const http = async ()=> {
            let resp =   await sendRequest();
            console.log(resp);
        }
        http();
    }, []);


    return <div className={FeaturedGifsStyles.featuredGifContainer}>
                <h3>Featured Gifs</h3>
                <div className={FeaturedGifsStyles.featuredGifs}></div>
            </div>

}


export default FeaturedGifs;
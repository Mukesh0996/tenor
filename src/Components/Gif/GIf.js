import React, { useContext } from 'react';
import GifStyles from './Gif.module.css';
import { SearchContext } from '../Store/SearchContext';
import useFetch from '../Hooks/useFetch';
import { tenorURL } from '../../utils/API';



const GIf = ({gifUrl, desc}) => {

    const {setSearchKey , setSearchResults} = useContext(SearchContext);

    // takes the URl as the arguments
    const {sendRequest, isLoading} = useFetch(tenorURL.concat(desc));

    const onClickHandler = async (e) => {

        e.preventDefault();

        setSearchKey(desc);
        const gifs = await sendRequest();
        setSearchResults(gifs.results);
    }

    return <div className={GifStyles.gifContainer} onClick={onClickHandler}>
            <img src={gifUrl} width="250" height="170" alt="breakup"/>
            <span>{desc}</span>
        </div>
}


export default GIf;
import React, { useContext } from 'react';
import GifStyles from './Gif.module.css';
import useFetch from '../../Hooks/useFetch';
import { tenorURL } from '../../Utils/API';
import { SearchContext } from '../../Store/SearchContext';




const Gif = React.forwardRef((props, ref) => {
    
    const {setSearchKey , setSearchResults} = useContext(SearchContext);

    // takes the URl as the arguments
    const {sendRequest, isLoading} = useFetch(tenorURL.concat(props.desc));

    const onClickHandler = async (e) => {

        e.preventDefault();

        setSearchKey(props.desc);
        const gifs = await sendRequest();
        setSearchResults(gifs.results);
    }

    return <div ref={ref} className={GifStyles.gifContainer} onClick={onClickHandler}>
                <img src={props.gifUrl} width="250" height="170" alt="breakup"/>
            <span>{props.desc}</span>
        </div>
})


export default Gif;
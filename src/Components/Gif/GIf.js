import React, { useContext } from 'react';
import GifStyles from './Gif.module.css';
import useFetch from '../../Hooks/useFetch';
import { SearchContext } from '../../Store/SearchContext';
import Loading from '../Loading/Loading';


const Gif = React.forwardRef((props, ref) => {
    
    const {setSearchKey , setSearchResults} = useContext(SearchContext);

    // takes the URl as the arguments
    const {sendRequest, isLoading} = useFetch(process.env.react_app_tenor_url.concat(props.desc));

    const onClickHandler = async (e) => {

        e.preventDefault();

        setSearchKey(props.desc);
        const gifs = await sendRequest();
        setSearchResults(gifs.results);
    }

    return <React.Fragment>
                { isLoading && <Loading/>}
                <div ref={ref} className={`${GifStyles.gifContainer} ${props.class}`} onClick={onClickHandler}>
                    <img src={props.gifUrl} width="150" height="150" alt="breakup"/>
                    <span>{props.desc}</span>
                </div>
            </React.Fragment>
   
})


export default Gif;
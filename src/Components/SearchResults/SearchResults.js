import React, { createRef, useContext, useEffect } from 'react';
import SearchResultsStyles from './SearchResults.module.css';
import ReactDOM from 'react-dom';
import Gif from '../Gif/GIf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from '../../Store/SearchContext';
import useObserver from '../../Hooks/useObserver';
import useFetch from '../../Hooks/useFetch';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';


const SearchResult = ({gifs}) => {

    const {searchKey, stateDispatcher} = useContext(AppContext);
    const gifRef = createRef();
    const {isLoading, sendRequest} = useFetch(process.env.react_app_tenor_url.concat(searchKey));

    const navigate = useNavigate();

    const fetchAdditionalGifs = async () => {
        const response = await sendRequest();
        stateDispatcher({type: 'SET_SEARCH_RESULTS', value: response.results});
    }

    const { observer } = useObserver(fetchAdditionalGifs);

    useEffect(() => {

        if(gifRef.current !== null) {
            observer.observe(gifRef.current);
        }
        return observer.disconnect();

    }, [gifRef])

    const onCloseHandler = () => {

        stateDispatcher({type: 'RESET_SEARCH_KEY'});
        stateDispatcher({type:'RESET_SEARCH_RESULTS'});
        navigate('/tenor');
    }

    const BackDrop = () => {

        return <div className={SearchResultsStyles.backdrop}>
                    <div className={SearchResultsStyles.close} onClick={onCloseHandler}>
                            <FontAwesomeIcon icon={faClose}/>
                    </div>
            </div>
    };

    const SearchContainer = () => {

        return <div className={SearchResultsStyles.gifsContainer}>
                { isLoading && <Loading/> }
                <h3>Search Results:</h3>
                <hr/>
                <div className={SearchResultsStyles.gifsHolder} >
                    {
                        gifs.map((gif, index) => {
                            if(gifs.length === index + 1 ) {
                                return  <Gif ref={gifRef} key={index} gifUrl={gif.media[0].gif.url} description={gif.content_description} />

                            } else {

                                return  <Gif key={index} gifUrl={gif.media[0].gif.url} description={gif.content_description} />
                            }
                        
                        })
                    }
                </div>
        </div>
    };


    return <React.Fragment>
                { ReactDOM.createPortal(<BackDrop/>, document.getElementById('searchResults')) }
                { ReactDOM.createPortal(<SearchContainer/>, document.getElementById('searchResults'))}
            </React.Fragment>

}


export default SearchResult;
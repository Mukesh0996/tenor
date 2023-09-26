import React, { createRef, useContext, useEffect } from 'react';
import SearchResultsStyles from './SearchResults.module.css';
import ReactDOM from 'react-dom';
import Gif from '../Gif/GIf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { SearchContext } from '../../Store/SearchContext';
import useObserver from '../../Hooks/useObserver';
import useFetch from '../../Hooks/useFetch';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';


const SearchResult = ({gifs}) => {

    const {setSearchResults, setSearchKey, searchResults, searchKey} = useContext(SearchContext);
    const gifRef = createRef();
    const {isLoading, sendRequest} = useFetch(process.env.react_app_tenor_url.concat(searchKey));

    const navigate = useNavigate();

    const fetchAdditionalGifs = async () => {
        const response = await sendRequest();
        setSearchResults(searchResults.concat(response.results))
    }

    const { observer } = useObserver(fetchAdditionalGifs);

    useEffect(() => {

        if(gifRef.current !== null) {
            observer.observe(gifRef.current);
        }
        return observer.disconnect();

    }, [gifRef])

    const onCloseHandler = () => {

        setSearchKey("");
        setSearchResults([]);
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

                                return  <Gif key={index} gifUrl={gif.media[0].gif.url} desc={gif.content_description} />

                            } else {

                                return  <Gif key={index} gifUrl={gif.media[0].gif.url} desc={gif.content_description} />
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
import React, { useContext } from 'react';
import SearchResultsStyles from './SearchResults.module.css';
import ReactDOM from 'react-dom';
import Gif from '../Gif/GIf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { SearchContext } from '../../Store/SearchContext';

const SearchResults = ({gifs}) => {

    const {setSearchResults} = useContext(SearchContext);
    console.log(gifs);

    const BackDrop = () => {


        return <div className={SearchResultsStyles.backdrop}>
                    <div className={SearchResultsStyles.close} onClick={() => { setSearchResults([]);}}>
                            <FontAwesomeIcon icon={faClose}/>
                    </div>
            </div>
    };

    const SearchContainer = () => {

        return <div className={SearchResultsStyles.gifsContainer}>
                <h3>Search Results:</h3>
                <hr/>
                <div className={SearchResultsStyles.gifsHolder} >
                    {
                        gifs.map((gif, index) => <Gif key={index} gifUrl={gif.media[0].gif.url} desc={gif.content_description} />)
                    }

                </div>

        </div>
    };


    return <React.Fragment>
                { ReactDOM.createPortal(<BackDrop/>, document.getElementById('searchResults')) }
                { ReactDOM.createPortal(<SearchContainer/>, document.getElementById('searchResults'))}
            </React.Fragment>

}


export default SearchResults;
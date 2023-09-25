import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchBarStyles from './Searchbar.module.css';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import React, { useContext, useEffect, useState } from 'react';
import useFetch from '../../Hooks/useFetch';
import { SearchContext } from '../../Store/SearchContext';
import Loading from '../Loading/Loading';


const SearchBar = () => {

    const { searchKey, setSearchResults, setSearchKey} = useContext(SearchContext);
    const [searchSuggestions, setSearchSuggestions] = useState([]);

    const { isLoading, 
        sendRequest } = useFetch(process.env.react_app_tenor_url.concat(searchKey)); 
    const {isLoading: searchLoading, 
        sendRequest: fetchSearchSuggestions } = useFetch(process.env.react_app_tenor_search_suggestions_url.concat(searchKey));

    // function to fetch gifs from server using useFetch custom hook
    const fetchGifs = async (e) => {

        if(e !== undefined) {
            e.preventDefault();
        }

       const response = await sendRequest();
       setSearchResults(response.results);
    }

    // fires when we change the value in the field to set the searchKey
    const onChangeHandler = (e) => {
        e.preventDefault();
        setSearchKey(e.target.value);
    }

    // fires when key is released 
    const keyUpHandler = (e) => {
        e.preventDefault();

        // fetch gifs only if the pressed key is 'Enter'
        if(e.key === 'Enter' && searchKey.length > 0) fetchGifs();

    }

    // fires when the mouse is clicked
    const mouseUpHandler = (e) => {

        e.preventDefault();
        if(searchKey.length > 0 )  fetchGifs();
       
    }

    // function to get suggestions from tenor server
    const getSearchSuggestions = async ()=> {
       let data = await fetchSearchSuggestions();
       setSearchSuggestions(data.results);
    }

    const tapSearchkey = (searchKey) => {
        setSearchKey(searchKey);
        fetchGifs();
        // reset search key and search suggestions
        setSearchKey("");
        setSearchSuggestions([]);
    }

    //debouncing by creating a delay of 1s
    useEffect( () => {
        let timer;

         timer =  setTimeout(() => {

            if(searchKey.length > 0)  getSearchSuggestions();
          
       }, 500);

       return () => clearTimeout(timer);
    }, [searchKey]);


    return  <React.Fragment>
                { ( isLoading || searchLoading )  && <Loading/>}
                <div className={SearchBarStyles.searchDiv}>
                    <div className={SearchBarStyles.container}>
                        <h6 className={SearchBarStyles.searchDivHeading}>tenor</h6>
                        <form onSubmit={fetchGifs}>
                            <div className={SearchBarStyles.searchContainer}>
                                <input type='text' 
                                    className={SearchBarStyles.searchbarInput} 
                                    placeholder='Search for GIFs and stickers' 
                                    name='search_value'
                                    value={searchKey} 
                                    onChange={onChangeHandler}/>
                                <div className={SearchBarStyles.searchIcon} tabIndex={0} onMouseUp={mouseUpHandler} onKeyUp={keyUpHandler}>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </div>
                            </div>
                        </form>
                        { searchSuggestions.length > 0 && <div className={SearchBarStyles.searchSuggestions}>
                            <ul>
                                {
                                    searchSuggestions.map((searchsuggestion, index)=> {

                                    return  <li key={index} 
                                                onClick={(e)=>{ tapSearchkey(searchsuggestion)}}>
                                                {searchsuggestion}
                                            </li>
                                    })
                                }
                            </ul>
                        </div>
                        }
                    </div>
                </div>
            </React.Fragment>
}

export default SearchBar;
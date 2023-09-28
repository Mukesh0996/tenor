import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchBarStyles from './Searchbar.module.css';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import React, { useContext, useEffect, useState } from 'react';
import useFetch from '../../Hooks/useFetch';
import { AppContext } from '../../Store/SearchContext';
import Loading from '../Loading/Loading';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {

    const { searchKey, featuredGifs, stateDispatcher} = useContext(AppContext);

    const [searchSuggestions, setSearchSuggestions] = useState({ suggestions:[], suggestionIndex: -1});

    const { isLoading, sendRequest } = useFetch(process.env.react_app_tenor_url.concat(searchKey)); 
    const {isLoading: searchLoading, sendRequest: fetchSearchSuggestions } = useFetch(process.env.react_app_tenor_search_suggestions_url.concat(searchKey));
    const navigate = useNavigate();

    //function to clear search input and search suggestions
    const clearSearchkey = () => stateDispatcher({type:'RESET_SEARCH_KEY'})
    const clearSearchSuggestion = () =>  setSearchSuggestions({suggestions:[],suggestionIndex:-1});

    // function to fetch gifs from server using useFetch custom hook
    const fetchGifs = async (e) => {
      
        if(e !== undefined) {
            e.preventDefault();
        }

       const response = await sendRequest();

       stateDispatcher({ type: 'SET_SEARCH_NUM', value:response.next});
       stateDispatcher({type: 'SET_SEARCH_RESULTS', value: response.results});
       navigate('/search-results');
    }

    // fires when we change the value in the field to set the searchKey
    const onChangeHandler = (e) => {
        e.preventDefault();  

        stateDispatcher({type:'SET_SEARCH_KEY', value: e.target.value})

        if(e.key==='Escape') {
            clearSearchkey();
            clearSearchSuggestion();    
        }

        if(searchKey.length < 1) {
            clearSearchSuggestion();
        }
    }

    const getSearchSuggestionsFromGifs = () => {

            const getDescriptions = featuredGifs.map(gif=> gif.content_description);

            const getFilter = getDescriptions.filter((description)=> {

                if(description.toLowerCase().split(" ").join("").includes(searchKey.toLowerCase())) {
                    return description
                }
            })

            setSearchSuggestions((prevState)=> {
                return {
                    suggestions: getFilter,
                    suggestionIndex: prevState.suggestionIndex
                }
               });
    }

    // fires when the key is clicked on search icon
    const mouseUpHandler = (e) => {
        e.preventDefault();

        if(searchKey.length > 0 )  fetchGifs();
       
    }

    const keyUpHandler = (e) => {
        e.preventDefault();

        // clear search when esc key is pressed

        if(e.key === 'Backspace' && searchKey.length < 1) {
            clearSearchSuggestion();
        }

        if(e.key === 'Escape') {
          clearSearchkey();
          clearSearchSuggestion();
        }

        // highlight suggestion by tapping down arrow
        if(e.key === 'ArrowDown') {
            setSearchSuggestions((prevState) => {

                return {
                    suggestions: prevState.suggestions,
                    suggestionIndex: Math.min(prevState.suggestionIndex + 1, prevState.suggestions.length - 1)
                }

            });
        }

        // highlight suggestion by tapping up arrow
        if(e.key === 'ArrowUp') {
            setSearchSuggestions((prevState) => {

                return {
                    suggestions: prevState.suggestions,
                    suggestionIndex: Math.max(prevState.suggestionIndex - 1, -1)
                }
            });
        }

        // set search 
        if(e.key === 'Enter') {
          stateDispatcher({type:'SET_SEARCH_KEY', value: searchSuggestions.suggestions[searchSuggestions.suggestionIndex]})
        //   clearSearchSuggestion();
        }
    }

    const iconPresspHandler = (e) => {
        e.preventDefault();

        if(e.key === 'Enter' && searchKey.length > 0) {
            fetchGifs();
        }

        // if(searchSuggestions.suggestions.length > 0) {
            clearSearchSuggestion();
        // }

    }

    // function to get suggestions from tenor server
    const getNewSearchSuggestions = async () => {

            let data = await fetchSearchSuggestions();

            setSearchSuggestions(prevState => {
             return {
                 ...prevState,
                 suggestions: data.results
             }});
      
    }

    const tapSearchkey = (searchsuggestion) => {
        stateDispatcher({type:'SET_SEARCH_KEY', value: searchsuggestion});

        fetchGifs();

        //reset to default state
        clearSearchSuggestion();
    }

    //debouncing by creating a delay of .5s
    useEffect( () => {

        if(searchKey.length > 0  ) {
            getSearchSuggestionsFromGifs();
        }

        let timer;
        timer =  setTimeout(() => {
            
            if( searchSuggestions.suggestions.length === 0 && searchKey.length > 0 ) {
                getNewSearchSuggestions();
            }

       }, 1000);
       return () => clearTimeout(timer);
    }, [searchKey]);


    return  <React.Fragment>
                { ( isLoading || searchLoading )  && <Loading/>}
                <div className={SearchBarStyles.searchDiv}>
                    <div className={SearchBarStyles.container}>
                        <h6 className={SearchBarStyles.searchDivHeading}>tenor</h6>
                        <form onSubmit={fetchGifs} autoComplete='off'>
                            <div className={SearchBarStyles.searchContainer}>
                                <input type='text' 
                                    className={SearchBarStyles.searchbarInput} 
                                    placeholder='Search for GIFs and stickers' 
                                    name='search_value'
                                    value={searchKey} 
                                    onChange={onChangeHandler} 
                                    onKeyUp={keyUpHandler}
                                    onBlur={(e)=> { 
                                        e.preventDefault();
                                        if(searchSuggestions.suggestions.length > 0) {
                                            clearSearchSuggestion();
                                        }
                                     }}
                                />
                                <div className={SearchBarStyles.searchIcon} tabIndex={0} onMouseUp={mouseUpHandler} onKeyUp={iconPresspHandler}>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </div>
                            </div>
                        </form>
                        { 
                        ( searchSuggestions.suggestions.length > 0 ) && <div className={SearchBarStyles.searchSuggestions}>
                            <ul>
                                {
                                    searchSuggestions.suggestions.map((searchsuggestion, index)=> {
                                    return  <li key={index} 
                                                className={index === searchSuggestions.suggestionIndex ? SearchBarStyles.selected: ''}
                                                onClick={(e)=> {e.preventDefault(); tapSearchkey(searchsuggestion)}}>
                                                { searchsuggestion }
                                            </li>;
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
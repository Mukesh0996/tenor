import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchBarStyles from './Searchbar.module.css';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import React, { useContext } from 'react';
import { tenorURL } from '../../Utils/API';
import useFetch from '../../Hooks/useFetch';
import { SearchContext } from '../../Store/SearchContext';
import Loading from '../Loading/Loading';



const SearchBar = () => {

    const { searchKey, setSearchResults, setSearchKey} = useContext(SearchContext);

    const { isLoading, sendRequest } = useFetch(tenorURL.concat(searchKey)); 


    const fetchGifs =  async (e) => {
        e.preventDefault();

       const response = await sendRequest();
       setSearchResults(response.results);
    }


    return  <React.Fragment>
                { isLoading && <Loading/>}
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
                                    onChange={(e)=> { setSearchKey(e.target.value) }}/>
                                <div className={SearchBarStyles.searchIcon}>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </React.Fragment>
}

export default SearchBar;
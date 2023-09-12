import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchBarStyles from './Searchbar.module.css';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useContext, useState } from 'react';
import { tenorURL } from '../../Utils/API';
import useFetch from '../../Hooks/useFetch';
import { SearchContext } from '../../Store/SearchContext';
import Loading from '../Loading/Loading';



const SearchBar = () => {

    const { searchKey, setSearchResults } = useContext(SearchContext);
    const [searchInput, setSearchInput] = useState("");
    const { isLoading, sendRequest } = useFetch(tenorURL.concat(searchInput)); 


    const fetchGifs =  async (e) => {
        e.preventDefault();
       const res = await sendRequest();
       setSearchResults(res.results);
    }


    return <div className={SearchBarStyles.searchDiv}>
                {isLoading && <Loading/>}
                <div className={SearchBarStyles.container}>
                    <h6 className={SearchBarStyles.searchDivHeading}>tenor</h6>
                    <form onSubmit={fetchGifs}>
                        <div className={SearchBarStyles.searchContainer}>
                            <input type='text' 
                                className={SearchBarStyles.searchbarInput} 
                                placeholder='Search for GIFs and stickers' 
                                name='search_value'
                                value={`${searchInput.length> 0 ? searchInput : searchKey}`} onChange={(e)=> setSearchInput(e.target.value)}/>
                            <div className={SearchBarStyles.searchIcon}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
}

export default SearchBar;
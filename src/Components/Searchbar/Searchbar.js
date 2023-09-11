import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchBarStyles from './Searchbar.module.css';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { tenorURL } from '../../utils/API';


const SearchBar = () => {

    const [searchInput, setSearchInput] = useState('');


    const fetchGifs = async() => {

        let url = tenorURL.concat(searchInput);
        const result = await fetch(url, {
            method:"GET"
        });
        const res = await result.json();
       return res;
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
       console.log(fetchGifs());
    }

    return <div className={SearchBarStyles.searchDiv}>
                <div className={SearchBarStyles.container}>
                    <h6 className={SearchBarStyles.searchDivHeading}>tenor</h6>
                    <form onSubmit={onSubmitHandler}>
                    <div className={SearchBarStyles.searchContainer}>
                        <input type='text' 
                            className={SearchBarStyles.searchbarInput} 
                            placeholder='Search for GIFs and stickers' 
                            value={searchInput} onChange={(e)=> setSearchInput(e.target.value)}/>
                        <div className={SearchBarStyles.searchIcon}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </div>
                        </div>
                    </form>
                </div>
            </div>

}


export default SearchBar;
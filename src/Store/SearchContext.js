import React, { useState } from "react";

export const SearchContext = React.createContext({ 
                                                    searchKey:"", 
                                                    setSearchKey: () => {},
                                                    searchResults:[], 
                                                    setSearchResults: () => {}
                                                });

const SearchContextProvider = (props) => {

    const [searchKey, setSearchKey] = useState("");
    const [searchNum, setSearchNum] = useState("");
    const [searchResults, setSearchResults] = useState([]);


    return <SearchContext.Provider value={{ searchKey, setSearchKey, searchResults, setSearchResults, searchNum, setSearchNum}}>
                { props.children }
            </SearchContext.Provider>
}

export default SearchContextProvider;
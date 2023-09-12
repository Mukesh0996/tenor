import React, { useState } from "react";

export const SearchContext = React.createContext({searchInp:"", searchResults:[], setSearchResults: () => {}});



const SearchContextProvider = (props) => {

    const [searchKey, setSearchKey] = useState("");
    const [searchResults, setSearchResults] = useState([]);


    return <SearchContext.Provider value={{searchKey, setSearchKey, searchResults, setSearchResults}}>{props.children}</SearchContext.Provider>
}


export default SearchContextProvider;
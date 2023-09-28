import React, { useContext } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import SearchBar from './Components/Searchbar/Searchbar';
import { AppContext } from './Store/SearchContext';
import SearchResult from './Components/SearchResults/SearchResults';
import {  Route, Routes } from 'react-router-dom';
import Container from './Components/Container';
import PreviewGif from './Components/PreviewGif/PreviewGif';


function App() {

  const { searchResults, previewGif } = useContext(AppContext);
  
  return (
    <div className="App">
        <Header/>
        <SearchBar/>
        <Routes>
            <Route path='/tenor' Component={Container}/>
            <Route path='/search-results' element={<SearchResult gifs={searchResults}/>}/>
            <Route path='/preview-gif/:gifId' element={<PreviewGif gif={previewGif}/>}/>
        </Routes>
    </div>
  );
}

export default App;

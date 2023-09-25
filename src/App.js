import { useContext } from 'react';
import './App.css';
import FeaturedGifs from './Components/FeaturedGifs/FeaturedGifs';
import Header from './Components/Header/Header';
import SearchBar from './Components/Searchbar/Searchbar';
import Trending from './Components/Trending/Trending';
import { SearchContext } from './Store/SearchContext';
import SearchResults from './Components/SearchResults/SearchResults';

function App() {

  const { searchResults } = useContext(SearchContext);
  

  return (
    <div className="App">
        <Header/>
        <SearchBar/>
        <Trending/>
        <FeaturedGifs/>
        { (searchResults.length > 0 )  && <SearchResults gifs={searchResults}/>  }

    </div>
  );
}

export default App;

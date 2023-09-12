import './App.css';
import FeaturedGifs from './Components/FeaturedGifs/FeaturedGifs';
import Header from './Components/Header/Header';
import SearchBar from './Components/Searchbar/Searchbar';
import Trending from './Components/Trending/Trending';

function App() {
  

  return (
    <div className="App">
        <Header/>
        <SearchBar/>
        <Trending/>
        <FeaturedGifs/>

    </div>
  );
}

export default App;

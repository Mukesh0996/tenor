import './App.css';
import Header from './Components/Header/Header';
import SearchBar from './Components/Searchbar/Searchbar';
import Trending from './Components/Trending/Trending';





function App() {
  return (
    <div className="App">
        <Header/>
        <SearchBar/>
        <Trending/>
    </div>
  );
}

export default App;

import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './Home';
import {Route,BrowserRouter,Routes} from 'react-router-dom';
//import Card from './components/Card';
import MovieList from './components/MovieList';
import Movie from './components/movieDetail/Movie';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='movie/:id' element={<Movie />} />
          <Route path='movies/:type' element={<MovieList />} />
          <Route path='/*'element={<h1>error</h1>} />

        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

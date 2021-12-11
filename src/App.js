import './App.css';
import AddMovies from './Components/AddMovies';
import MovieLists from './Components/MovieLists';
import Nav from './Components/Nav';
import { MovieProvider } from './MovieContext/MovieContext';

const App = () => {
  return (
    <div className='App'>
      <MovieProvider>
        <Nav />
        <AddMovies></AddMovies>
        <MovieLists />

      </MovieProvider>
    </div>
  )
}

export default App;
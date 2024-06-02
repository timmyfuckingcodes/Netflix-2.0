
import './App.css'
import MovieList from './components/MovieList/MovieList'
import Episode from './pages/Episode/Episode';
import Homepage from './pages/Homepage/Homepage'
import MovieListing from './pages/Movie-Listing/MovieListing'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";
import Player from './pages/Player/Player';
import Tvseries from './pages/Tvseries/Tvseries.jsx';

function App() {
  return (
    <>
    <Router>
    <Routes>
      <Route
      path='/'
      element={<Homepage/>}
      >
        </Route>
        <Route
      path='/movies'
      element={<MovieListing/>}
      >
        </Route>
        <Route
      path='/episodes'
      element={<Episode/>}
      >
        </Route>
        <Route
      path='/player/:id'
      element={<Player/>}
      >
        </Route>
        <Route
      path='/tv'
      element={<Tvseries/>}
      >
        </Route>
      </Routes> 
    </Router>


   </>
  )
}

export default App

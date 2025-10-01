import { useContext, useState } from 'react';
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
import React from 'react';
import Search from './pages/Search/Search.jsx';
import TvseriesPlayer from './pages/TvseriesPlayer/TvseriesPlayer.jsx';
import Signin from './pages/Sign in/Signin.jsx';
import ProfileManagement from './pages/ProfileManagement/ProfileManagement.jsx';
import { AuthContext } from './store/AuthContext.jsx';

function ProtectedRoute({ children }) {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  isLoggedIn ? <Navigate to="/homepage" /> : <Navigate to="/signin" />

  return children;
}


function App() {

  const [movietype,SetMovietype] = useState(" ");
  const authCtx = React.useContext(AuthContext);
  

 return (
    <Router>
      <Routes>
 <Route
  path="/"
  element={
    authCtx.isLoggedIn ? <Navigate to="/homepage" /> : <Navigate to="/signin" />
  }
/>
        {/* Public routes */}
        <Route path="/signin" element={<Signin />} />
        <Route path="/profile" element={<ProfileManagement />} />

        {/* Protected routes */}
        <Route
          path="/homepage"
          element={
            <ProtectedRoute>
              <Homepage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/movies"
          element={
            <ProtectedRoute>
              <MovieListing type="movie"/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/episodes"
          element={
            <ProtectedRoute>
              <Episode />
            </ProtectedRoute>
          }
        />
        <Route
          path="/player/:type/:id"
          element={
            <ProtectedRoute>
              <Player type={movietype} />
            </ProtectedRoute>
          }
        />
        {/* <Route
          path="/Tvplayer/:id"
          element={
            <ProtectedRoute>
              <TvseriesPlayer />
            </ProtectedRoute>
          } */}
        {/* /> */}
        <Route
          path="/tv"
          element={
            <ProtectedRoute>
              <Tvseries type={"tv"}/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/search"
          element={
            <ProtectedRoute>
              <Search />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}
  
export default App

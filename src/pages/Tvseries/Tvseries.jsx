import React from 'react'
import './Tvseries.css'
import Topbar from  '../../components/Topbar/Topbar'
import { BiSearch } from 'react-icons/bi'
import MovieList from '../../components/MovieList/MovieList'
import RatedMovies from '../../components/RatedMovies/RatedMovies'
import Footer from '../../components/Footer/Footer'
export default function Tvseries() {
  return (
    <div className='tv-seriesWrapper'>
        <div className= "tv-seriesTopbar">
 <Topbar />
</div>
<div className='tv-seriesContainer'>
<h1 className='tvepisode-Header'>Discover The Perfect Tv series With An Effortless Search And Selection</h1> 
      <div>
  <BiSearch className='search-Icon '/>   
  <input
  type='text'
    className='Tvseries'
    placeholder='What are you looking for......'/>
    </div>
</div>
<div className='Movie-LIST'>
   <MovieList title = 'Airing Today'  category={"airing_today"} type={"tv"}/>
   <MovieList title = 'Popular'  category={"popular"} type={"tv"}/>
   <MovieList title = 'On The Air'  category={"on_the_air"} type={"tv"}/> 
   <MovieList title = 'Top-Rated'  category={"top_rated"} type={"tv"}/>   
  <div>
<RatedMovies title ="Trending" type="person" date="day"/>
<Footer/>
    </div>
  </div>
    </div>
  )
}

import React from 'react'
import './MovieListing.css'
import Topbar from '../../components/Topbar/Topbar'

import { BiSearch } from 'react-icons/bi'
import MovieList from '../../components/MovieList/MovieList'
import RatedMovies from '../../components/RatedMovies/RatedMovies'
import Footer from '../../components/Footer/Footer'
export default function MovieListing() {
  return (
    <div>
     <div className='MovieListing-container'>
    <Topbar/>
    <div className='MovieHeader-container'>
      <h1 className='MovieListing-Header'>Discover The Perfect Film With An Effortless Search And Selection</h1> 
      <div>
  <BiSearch className='search-Icon '/>   
  <input
  type='text'
    className='Movie-Search'
    placeholder='What are you looking for......'/>
   </div>
  <div>
    
    </div> 
    </div>
    <div className='Movie-LIST'>
   <MovieList title = 'Now Playing'  category={"now_playing"} type={"movie"}/>
   <MovieList title = 'Popular'  category={"popular"} type={"movie"}/>
   <MovieList title = 'Upcoming'  category={"upcoming"} type={"movie"}/> 
   <MovieList title = 'Top-Rated'  category={"top_rated"} type={"movie"}/>   
  <div>
<RatedMovies title ="Trending" type="person" date="day"/>
<Footer/>
    </div>
  </div>
</div>
    </div>
  )
}


import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import MovieSearch from '../../components/Search/MovieSearch'
import Topbar from '../../components/Topbar/Topbar'
import './Search.css'
const Search = () => {
  return (
    <>
    <Topbar/>
      <div className='search-container'>
      <Sidebar/>
      <div className='movie-searchcontainer'>
      <MovieSearch/>
      </div>
   </div>
    </>
  
  )
}

export default Search

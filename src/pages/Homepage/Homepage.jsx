import React  from 'react'
import './Homepage.css'
import { CiPlay1 } from "react-icons/ci";
import MovieList from '../../components/MovieList/MovieList';
import RatedMovies from '../../components/RatedMovies/RatedMovies';
import Footer from '../../components/Footer/Footer'
import Topbar from '../../components/Topbar/Topbar';
import { Link } from 'react-router-dom';



export default function Homepage() {
  return (
    <div>
      <div className='Homepage-container'>
<Topbar/>
     <div  className='Homepage-Information'>
      <h1 className='Header-Heading'>GALATIC CONVERGENCE </h1>
      <h1 className='Header-secondHeading'>INVASION <span className='secondHeading-tag'>OF</span> EARTH</h1>
      <p className='Header-information'>PLAYCINE <span className='header-information'>OFFICIAL:NEW EPISODE TONIGHT</span></p>
      <p className='Header-paragraph'>In the midst of catalytic extraterrestial invasion,a diverse group of heroes must unite to save humanity from the relentless onslaught</p>
     <div className='Button-container'>
      <Link to={"/player/movie/"}>
     <button className='button-one'><CiPlay1 className='Play-logo' />Play</button>  
      </Link>
     <button className='button-two'>More-Info</button>
     </div>
     </div>
  </div> 
  
  <div>
  <RatedMovies title ="Trending this week" type="all" date="week"/>
  <RatedMovies title ="Trending Movies" type="movie" date="week"/>
  <RatedMovies title ="Trending Tv Shows" type="tv" date="week"/>
  <RatedMovies title =" Actors From You Favourites" type="person" date="day"/>
 </div> 
  
<div>
    <RatedMovies title={'Trending Movies'}  type="movie" date="week"/>  
</div> 

   <div>
<Footer/>
   </div>
    </div>
    
  )
}

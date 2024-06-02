import React from 'react'
import './Topbar.css';
import { BiSearchAlt } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";
import {Link} from 'react-router-dom';
import MovieListing from '../../pages/Movie-Listing/MovieListing';
export default function Topbar() {
  return (
<div className='Topbar-container'>
<div className='Topbar-containerWrapper'>
     <div className='TopbarFirst-Icons'>
        <div className='Logo-container'>
         <img src='../../assets/Image 21.png' className='Logo-image'/> 
         <span className='Logo-text'>PLAYCINE</span>  
        </div>
        
     <ul className='RightLinkIcons'>
     <Link to={'/'}>
        <li className='icons'>Home</li>
      </Link>  
      <Link to={'/movies'}>  
         <li className='icons'>Movie</li> 
        </Link>
      <Link to={'/tv'}>
       <li className='icons'>Tv Shows</li>
      </Link>
       
        <li className='icons'>Browse by language</li>
     </ul>
    </div>
    <div className='TopbarLeftMenu'>
     <BiSearchAlt className='LeftIcon'/>
     <IoIosNotificationsOutline className='LeftIcon'/>
     <img src='' alt='' className='Profile-Image'/>
    </div>
        </div>
   </div>
  )
}

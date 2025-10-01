import React from 'react'
import './Topbar.css';
import { BiSearchAlt } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";
import {Link} from 'react-router-dom';
import Image from '../../assets/Image 21.png';
import MovieListing from '../../pages/Movie-Listing/MovieListing';
export default function Topbar() {
  return (
<div className='Topbar-container'>
<div className='Topbar-containerWrapper'>
     <div className='TopbarFirst-Icons'>
        <div className='Logo-container'>
         <img src={Image}className='Logo-image'/> 
         <span className='Logo-text'>PLAYCINE</span>  
        </div>
        
     <ul className='RightLinkIcons'>
     <Link className='routerlink' to={'/'}>
        <li className='icons'>Home</li>
      </Link>  
      <Link className='routerlink' to={'/movies'}>  
         <li className='icons'>Movie</li> 
        </Link>
      <Link className='routerlink' to={'/tv'}>
       <li className='icons'>Tv Shows</li>
      </Link>
       <Link className='routerlink' to={'/search'}>
         <li className='icons'>Browse by language</li>
       </Link>
      </ul>
    </div>
    <div className='TopbarLeftMenu'>
      <Link className='searchlink' to={'/search'}>
      <BiSearchAlt className='LeftIcon'/>
      </Link>
   
     <div>
     <IoIosNotificationsOutline className='LeftIcon'/> 
     <span className='TopIconBadge'>2</span>
      </div>
     
     <img src='' alt='' className='Profile-Image'/>
    </div>
        </div>
   </div>
  )
}

import React from 'react'
import Topbar from '../../components/Topbar/Topbar'
import './Episode.css'
import { CiPlay1 } from 'react-icons/ci'
import EpisodeList from '../../components/EpisodeList/EpisodeList'
import Movie from '../../components/Movie/Movie'
import Footer from '../../components/Footer/Footer'
export default function Episode() {
  return (
    <div>
<div className='Episode-container'>
<Topbar/>
<div  className='Homepage-Information'>
      <h1 className='Header-Heading'>GALATIC CONVERGENCE </h1>
      <h1 className='Header-secondHeading'>INVASION <span className='secondHeading-tag'>OF</span> EARTH</h1>
      <p className='Header-information'>PLAYCINE <span className='header-information'>OFFICIAL:NEW EPISODE TONIGHT</span></p>
      <p className='Header-paragraph'>In the midst of catalytic extraterrestial invasion,a diverse group of heroes must unite to save humanity from the relentless onslaught</p>
     <div className='Button-container'>
      <button className='button-one'><CiPlay1 className='Play-logo' />Play</button>
      <button className='button-two'>More-Info</button>
     </div>
    </div>
      <div className='EpisodeList'>
      <EpisodeList title="Episodes" others="More like this"/>
     </div>
  
   </div> 
  </div>
  )
}

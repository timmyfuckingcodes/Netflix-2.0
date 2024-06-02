import React from 'react'
import './TVEpisode.css'
export default function TVEpisode() {
  return (
    <div className='episode-container'>
     <iframe width={"230px"} height={"135px"} className='episode-frame'></iframe>
       <span className='episode-number'>Episode 1</span>
      <h3 className='episode-header'>Invasion begins</h3>
      <p className='episode-info'>Earth faces relentless extratrerrestial assault and ,igniting the epic conflict</p>
      <button className='episode-tag'>52 min</button>
    </div>
  )
}

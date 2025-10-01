import React from 'react'
import './EpisodeList.css'
import TVEpisode from '../Episode/TVEpisode'
import Footer from '../Footer/Footer'

export default function EpisodeList(props) {
  return (
    <div className='MovieList-container'>
      <h1 className='MovieList-Title'>{props.title}</h1>
      <div className='Episode-List'>
        
<TVEpisode/>
<TVEpisode/>
<TVEpisode/>
<TVEpisode/>
<TVEpisode/>
<TVEpisode/>
<TVEpisode/>
</div>
<div>
  <Footer/>
</div>
</div>
    
  )
}

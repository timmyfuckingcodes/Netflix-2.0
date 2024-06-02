import React from 'react'
import './RatedMovie.css'
export default function RatedMovie(props) {
  return (
    <div>
  <h1 className='RatedMovieTitle'>{props.Index}</h1>
   <img
   src={props.Image}
   className='movieImage'/>
   <h1 className='RatedMovie-name'>{props.name}</h1>
       </div>
  )
}

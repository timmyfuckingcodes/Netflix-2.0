import React from 'react'
import './Movie.css'
export default function Movie(props) {
  return (
    <div>
      <img 
      src= {props.image}
       alt=''  
       className='MovieImage'
       onMouseEnter={props.MouseEnter}
       onMouseLeave={props.MouseLeave}/>
       <h1>{props.title}</h1>
    </div>
  )
}

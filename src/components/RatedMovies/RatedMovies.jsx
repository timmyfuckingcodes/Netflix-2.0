import React, { useEffect, useState} from 'react'
import './RatedMovies.css'
import RatedMovie from '../RatedMovie/RatedMovie'
import {Link} from 'react-router-dom'




export default function RatedMovies(props) {


const [TrendingMovies,SetTrendingMovies] = useState([]);
useEffect(()=>{
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZmI1MDY0ZjQ2M2Y4N2E1ODcwYTNlZjk2NWNmMDdlNCIsInN1YiI6IjY2NTY1NTZjYWY3MzNkYTFjN2RmZGE1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ahyxWZkD5arNXwMAxnt02_3ADJ8sLAUq5nwoQ0jIA0w'
    }
  };
  
  fetch(`https://api.themoviedb.org/3/trending/${props.type}/${props.date}?language=en-US`, options)
    .then(response => response.json())
    .then(response => SetTrendingMovies(response.results))
    .catch(err => console.error(err));
},[])



  return (
    <div className='Ratedmovie-Container'>
       <h1 className='RatedmovieList-Title'>{props.title}</h1>
       <div className='Movie-List'>
       {TrendingMovies.map((movie,index)=>{
        return <Link  className="rated_Movies" to={`/player/${props.type=='all'? movie.media_type: props.type}/${movie.id}`}>
        <RatedMovie Index={index + 1} Image={`https://image.tmdb.org/t/p/w500/${props.type == "person" ? movie.profile_path :  movie.backdrop_path }`} name={`${props.type == "person" || movie.media_type == "tv" ? movie.name : movie.original_title}`} type={"movie"} />
        </Link> 
       })}

  
      </div>
    </div>
  )
}

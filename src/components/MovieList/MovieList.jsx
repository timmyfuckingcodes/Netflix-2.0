import React, { useEffect,useState} from 'react'
import './MovieList.css'
import Movie from '../Movie/Movie'
import { Link } from 'react-router-dom'


export default function MovieList(props) {
const [movieData,setmovieData] = useState([])
const [AiringData,setAiringData]= useState([])
console.log(AiringData);
useEffect(()=>{
    const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZmI1MDY0ZjQ2M2Y4N2E1ODcwYTNlZjk2NWNmMDdlNCIsInN1YiI6IjY2NTY1NTZjYWY3MzNkYTFjN2RmZGE1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ahyxWZkD5arNXwMAxnt02_3ADJ8sLAUq5nwoQ0jIA0w'
    }
  };
  
  fetch(`https://api.themoviedb.org/3/${props.type}/${props.category?props.category :"now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setmovieData(response.results))
    .catch(err => console.error(err));
},[])

  return (
    <div className='MovieList-container'>
      <h1 className='MovieList-Title'>{props.title}</h1>
      <div className='Movie-List'  >
       {movieData.map((movie,index)=>{
       return <Link to={`/player/${movie.id}`} className='movie-Link'>
        <Movie MouseEnter={()=>sethover((e)=>!e)} MouseLeave ={()=>sethover((e)=>!e)} image={`https://image.tmdb.org/t/p/w500/`+ movie.backdrop_path} key={index} title={props.type == "movie" ? movie.original_title : movie.original_name } alt=""/> 
             </Link>
       })} 
     
       

    
      </div>
     
    </div>
  )
}

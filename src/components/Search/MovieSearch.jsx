import React, { useEffect } from 'react'
import './MovieSearch.css'
import MovieCard from '../MovieCard/MovieCard'
const MovieSearch = () => {

  useEffect(() => {
   const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZmI1MDY0ZjQ2M2Y4N2E1ODcwYTNlZjk2NWNmMDdlNCIsIm5iZiI6MTcxNjkzMzk5Ni43NzEwMDAxLCJzdWIiOiI2NjU2NTU2Y2FmNzMzZGExYzdkZmRhNTUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.WAqZX1tc71BrUeIE_a9Yzj-g7HTGk7R2YtPK-W6F3RM'
      }
    };
    
    fetch('https://api.themoviedb.org/3/account/21295565/rated/movies?language=en-US&page=1&sort_by=created_at.asc', options)
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(err => console.error(err));
  },[])
  return (
    <>
    <div className='movie-card-container'>
    <MovieCard/>
    <MovieCard/>
    <MovieCard/>
    <MovieCard/>
    <MovieCard/>
    <MovieCard/>
    <MovieCard/>
    <MovieCard/>
    <MovieCard/>
    <MovieCard/>
    <MovieCard/>
    <MovieCard/>
    <MovieCard/>
    <MovieCard/>
    <MovieCard/>
    <MovieCard/>
    <MovieCard/>
    <MovieCard/>
   </div>
    <div class="nav-button">
      <button>
      <a href="#" class="previous round">&#8249;</a>
      </button>
   <button>
   <a href="#" class="next round">&#8250;</a>
   </button>
  
    </div>
    </>
  )
}

export default MovieSearch

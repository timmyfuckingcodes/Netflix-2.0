import React, { useState } from 'react'
import "./MovieCard.css"


// const [Data,setData] = useState([]);
  
// useEffect(()=>{
//   const options = {
//       method: 'GET',
//       headers: {
//         accept: 'application/json',
//         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZmI1MDY0ZjQ2M2Y4N2E1ODcwYTNlZjk2NWNmMDdlNCIsInN1YiI6IjY2NTY1NTZjYWY3MzNkYTFjN2RmZGE1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ahyxWZkD5arNXwMAxnt02_3ADJ8sLAUq5nwoQ0jIA0w'
//       }
//     };
    
//     fetch(`https://api.themoviedb.org/3/search/collection?query=${adventure}&include_adult=false&language=en-US&page=3`, options)
//       .then(response => response.json())
//       .then(response => setData(response.results[0]))
//       .catch(err => console.error(err));
// },[])

// console.log(Data);


const MovieCard = () => {
  return (
<div class="main-container">
<div class="poster-container">
    <a href="#"><img src="https://i.ibb.co/ThPNnzM/blade-runner.jpg" class="poster" /></a>
</div>
</div>
  )
}

export default MovieCard

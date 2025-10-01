import React, { useEffect,useState,} from 'react'
import "./TvseriesPlayer.css"
import { FaRegArrowAltCircleLeft } from 'react-icons/fa'
import {useParams,useNavigate} from 'react-router-dom'


export default function TvseriesPlayer(props) {
    const {id} = useParams();
    const navigate = useNavigate();
    const [Data,setData] = useState([]);
    
    
    console.log(id);
     useEffect(()=>{
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZmI1MDY0ZjQ2M2Y4N2E1ODcwYTNlZjk2NWNmMDdlNCIsInN1YiI6IjY2NTY1NTZjYWY3MzNkYTFjN2RmZGE1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ahyxWZkD5arNXwMAxnt02_3ADJ8sLAUq5nwoQ0jIA0w'
            }
          };
          
          fetch(`https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`, options)
            .then(response => response.json())
            .then(response => setData(response.results[0]))
            .catch(err => console.error(err));
     },[])
     
  return (
    <div className='player'>
    <div className='player-container'>
    <div className='player-wrapper'>
 <FaRegArrowAltCircleLeft className='player-icon' onClick={()=>{navigate(-2)}} />
    <iframe src={`https://www.youtube.com/embed/${Data.key}`}
  width='90%' height='100%' title='trailer ' className='player-video' allowFullScreen></iframe>        
    </div>
    <div className='player-info'>
    <p>{Data.published_at}</p>
    <p>{Data.name}</p>
    <p>{Data.type}</p>
 </div>
   </div>
    </div>
  )
}

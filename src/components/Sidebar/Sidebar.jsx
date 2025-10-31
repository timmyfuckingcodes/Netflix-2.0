import React, { useEffect, useState } from 'react'
import './Sidebar.css'
const Sidebar = () => {

  const[data,setData]= useState([]);
  useEffect(()=>{
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZmI1MDY0ZjQ2M2Y4N2E1ODcwYTNlZjk2NWNmMDdlNCIsIm5iZiI6MTcxNjkzMzk5Ni43NzEwMDAxLCJzdWIiOiI2NjU2NTU2Y2FmNzMzZGExYzdkZmRhNTUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.WAqZX1tc71BrUeIE_a9Yzj-g7HTGk7R2YtPK-W6F3RM'
      }
    };
    
    fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
      .then(res => res.json())
      .then(res =>{setData(res.genres)
    })
      .catch(err => console.error(err));
  },[])
 
  return (
    <div className='sidebar-container'>
        <div className='sidebar-wrapper' >
        <p>ALL MOVIES</p>
         <p>Browse by genre</p>
      {data&& data.map((item)=>(
        <li key={item.id}>
        <label>{item.name}</label>
        </li>
      ))}
      </div>
    <div>
<p>Filter by</p>
{data&& data.map((item)=>(
  <li key={item.id}>
 <input type='checkbox'/>
<label>{item.name}</label>
</li>
))}




<p>Filter by</p>
<li>
 <input type='checkbox'/>
<label>Action</label>
</li>
<li>
 <input type='checkbox'/>
<label>Action</label>
</li>
<li>
 <input type='checkbox'/>
<label>Action</label>
</li>
<li>
 <input type='checkbox'/>
<label>Action</label>
</li>
<li>
 <input type='checkbox'/>
<label>Action</label>
</li>
<li>
 <input type='checkbox'/>
<label>Action</label>
</li>
<li>
 <input type='checkbox'/>
<label>Action</label>
</li>
</div>

<div>
<p>Filter by</p>
<li>
 <input type='checkbox'/>
<label>Action</label>
</li>
<li>
 <input type='checkbox'/>
<label>Action</label>
</li>
<li>
 <input type='checkbox'/>
<label>Action</label>
</li>
<li>
 <input type='checkbox'/>
<label>Action</label>
</li>
<li>
 <input type='checkbox'/>
<label>Action</label>
</li>
<li>
 <input type='checkbox'/>
<label>Action</label>
</li>
<li>
 <input type='checkbox'/>
<label>Action</label>
</li>
</div>


    </div>

  )
}

export default Sidebar

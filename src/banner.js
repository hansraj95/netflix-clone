import React,{useState,useEffect} from 'react'
import axios from './axios'
import './banner.css'
function Banner (props)
{  const fetchurl=props.request;
    const [movie,setmovie]=useState([]);
   useEffect(()=>
{
   async function fetch()
   {
      const request=await axios.get(fetchurl);
      const fetchdata=request.data.results;
      setmovie(fetchdata[Math.floor(Math.random()*fetchdata.length-1)])

   }
   fetch()
   
},[fetchurl])
function truncate(str,n)
{
    return str?.length > n ?str.substr(0,n-1) +"...":str;
}
return(
    <header className="banner"
    style={{
        backgroundSize:"cover",
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}") `,
    }}>
    <div className="banner_content">
    <h1 className="title">{movie?.title||movie?.name}</h1>
    <div className="banner_buttons">
     <button className="banner_button">Play</button>
     <button className="banner_button">My List</button>
    </div>
    <h1 className="overview">{truncate(movie?.overview,130)}</h1>
    </div>
    <div className="fade-bottom"/>
    </header>
)
}
export default Banner;
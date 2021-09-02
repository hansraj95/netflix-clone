import React,{useState,useEffect} from 'react';
import axios from './axios';
import './netflix.css'
import YouTube from 'react-youtube';
import movieTrailer from "movie-trailer"
function CreateRow (props)
{const title=props.title;
const largeRow=props.largeRow;
const img_path="https://image.tmdb.org/t/p/original/"
const fetchurl=props.request;
const [arr,setdata]=useState([])
const [trailerurl,settrailer]=useState("")
useEffect(()=>{
 async function fetch()
 {
       
      const data=await axios.get(fetchurl);
      setdata(data.data.results);
      
 }
 fetch();}, [fetchurl]
)
const opts={
    height:"350",
    width:"95%",
    playerVars:
    {
        autoplay:1
    }
}

 const fetchmovie=(movie)=>
{if(trailerurl)
    {
        settrailer("")
    }
    else{
        movieTrailer(movie?.name||movie?.title||"")
        .then((url)=>
        {
            const urlparam=new URLSearchParams(new URL(url).search)
            settrailer(urlparam.get('v'))
        }
        )
        .catch((error)=>console.log(error))
    }

}
 
 return(
     <div className="row">
         <h1>{title}</h1>
        <div className="posters">
       { arr.map((movie)=>
         <img className={`poster ${largeRow &&"large_poster"}`}
         onClick={()=>fetchmovie(movie)}
         src={`${img_path}${largeRow?movie.poster_path:movie.backdrop_path}`} alt={title} />
        )}
        </div>
      {trailerurl&& <YouTube videoId={trailerurl} opts={opts}/>}
     </div>
 )
}
export default CreateRow;
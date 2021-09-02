import React, { useEffect, useState } from 'react'
import './nav.css'
function Logo ()
{    const [show,handleshow]=useState(false)
     useEffect(()=>
    {  
        window.addEventListener("scroll",()=>
        {
            if(window.scrollY>100)
            {
                handleshow(true)
            }
            else handleshow(false)
        });
        return ()=>
        {
            window.removeEventListener("scroll")
        }
    },[])
    return(
        <div className={`logos ${show && "nav_black"}`}>
        
        <img className="logo" src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="netflix logo"/>
        
        
        <img className="avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"alt="netflix logo" />
        
        </div>
    )
}
export default Logo;
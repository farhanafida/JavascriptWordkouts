import React from 'react';
import {useNavigate} from 'react-router-dom';


export default function NavigateHook() {
    const navigate=useNavigate();
    const handleClick = ()=>{
        navigate('/About')
    } 
  return (
    <div>
        <button onclick={handleClick}>click here</button>  
    </div>
  )
}


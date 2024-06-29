import React,{useState,useEffect} from 'react'

export default function EffectSample() {
    const [count,setCount]=useState(0);

    useEffect(() => {
        document.title =   `you clicked ${count} times` ;
    });
  return (
    <div>

        <p>Clicked {count} times</p>
        <button onClick={()=>setCount(count+1)} >click here</button>
      
    </div>
  )
}

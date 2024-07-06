
import React,{useState,useEffect} from 'react'

export default function LifeCycleHook() {

  const [count,setCount]=useState(0)

  useEffect(()=>{

    console.log('component mounted');
    
    return(
      console.log('component unmounted'))
  },[])

  useEffect(()=>{
    console.log(`updated count ${count}`);
  },[count])


  return (
    <div>

      <button onClick={()=>setCount(count+1)}>hey</button>
      
    </div>
  )
}



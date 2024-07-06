
import React,{useState,useRef,useEffect} from 'react'

export default function UseHook() {

    const [count,setCount]=useState(0)
    const inputVal=useRef()
    useEffect(()=>{
        inputVal.current=count
    })

    const val=inputVal.current
    

  return (
    <div>

        <h1>current:{count}</h1>
        <h1>prev:{val}</h1>
        <button onClick={()=>setCount(count+1)}>click here</button>
      
    </div>
  )
}

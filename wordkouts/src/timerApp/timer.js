

import React,{useState,useEffect} from 'react'

export default function Timer() {

    const [time,setTime]=useState(0)
    const [isActive,activateTime]=useState(false)

    useEffect(()=>{
        let interval=null
        
        if (isActive){
            interval=setInterval(()=>{
                setTime((prevStage)=>prevStage+1)
            },1000)
        }
        else{
            clearInterval(interval)
        }
        return ()=>clearInterval(interval)
},[isActive])

const handleButton=()=>{
    activateTime(!isActive)
}
const resetTimer=()=>{
    setTime(0)
    activateTime(false)
}
  return (
    <div>

        <h1>{time}</h1>
        <button onClick={handleButton}>{isActive?'pause':'start'}</button>
        <button onClick={resetTimer}>Reset</button>
    </div>
  )
}

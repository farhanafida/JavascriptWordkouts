
import React,{useState,useMemo} from 'react'

export default function MamoWorkout() {
    const [count,setCount]=useState(0);
    const [countEven,setCountEven]=useState(0);

    const handleCount=()=>{
        setCount(count+1)
    }
    const handleEvenCount=()=>{
        setCountEven(countEven+1)
    }

    const isEven=useMemo(()=>{
        let val
        if (countEven%2===0){
            val='even' 
         }else{
            val='odd'
         }
         return val
    },[countEven])
  return (
    <div>
        <h1>{count}{isEven}</h1>
        <button onClick={handleCount}>Add Count</button>
        <h1>{countEven}</h1>
        <button onClick={handleEvenCount}>Add Even Count</button>
      
    </div>
  )
}

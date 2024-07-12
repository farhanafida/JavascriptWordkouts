
import React, { useMemo, useState } from 'react'

export default function UseMemo() {

    const [count,setCount]=useState(0)
    const [countEven,setCountEven]=useState(0)

    const handleCount=()=>{
        setCount(count+1)
    }
    const handleEvenCount=()=>{
        setCountEven(countEven+1)
    }

    const isEven=useMemo(()=>{
        let i=0
        while(i<99999999) i++
        if (count%2===0)
            return 'Even'
        else
            return 'Odd'
    },[count])
    
  
    return (
    <div>

        <h1>{count} {isEven}</h1>
        <button onClick={handleCount}>Add Count</button>
        <h1>{countEven}</h1>
        <button onClick={handleEvenCount}>Add Even numbers</button>
      
    </div>
  )
}

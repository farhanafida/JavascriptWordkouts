import React,{useState} from 'react'

export default function CounterMultiple() {
    const [count,setCount]=useState(1)
    const [step,setStep]=useState(1)
  return (
    <div>
        <p>{count}</p>
        <input type='number' value={step} onChange={(e)=>setStep(Number(e.target.value))}/>

        <button onClick={()=>setCount(count+step)}>+</button>
        <button onClick={()=>setCount(count-step)}>-</button>
      
    </div>
  )
}

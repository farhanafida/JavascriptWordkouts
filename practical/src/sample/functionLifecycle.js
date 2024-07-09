import React,{useEffect,useState} from 'react'

export default function FunctionLifecycle() {
    const [count,setCount]=useState(0)
    useEffect(()=>{
        console.log('mounted')

        return(()=>{
            console.log('unmounted')
        })
    },[]);
    useEffect(()=>{
        console.log('value changed')
    },[count])
  return (
    <div>
      {count}
      <button onClick={()=>setCount(count+1)} >click</button>
    </div>
  )
}

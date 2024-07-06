import React,{useState} from 'react'

export default function Child({toParent}) {

    const [data,Setdata]=useState('')

    const childValue=()=>{

        toParent(toParent);
    }

  return (
    <div>
        <input value={data} onChange={(e)=>Setdata(e.target.value)} type='text'/>
        <button onClick={childValue}>send data to parent</button>
      
    </div>
  )
}

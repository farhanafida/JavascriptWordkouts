
import React,{useState} from 'react'

export default function SyntheticEvent() {
    const[data,setData]=useState('');

    const handleInput=(event)=>{
        setData(event.target.value);
    }
  return (
    <div>

        <h1>{data}</h1>

        <input type='text' value={data} onChange={handleInput}/>
      
    </div>
  )
}

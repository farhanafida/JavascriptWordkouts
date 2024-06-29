import React,{useState} from 'react';
import './CounterFn.css';

export default function CounterFn() {
    const [count,inCount]=useState(0)
  return (
    <div>

        <span> you clicked {count} times </span>

        <button onClick={()=>inCount(count+1)}>+</button>
        <button onClick={()=>inCount(count-1)}>-</button>
        <button onClick={()=>inCount(0)}>clear</button>
      
    </div>
  )
}

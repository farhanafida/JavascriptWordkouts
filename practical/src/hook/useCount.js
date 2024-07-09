
import React from 'react';
import useCounter from './counter';

export default function UseCount() {

    const {count,increment,decrement}=useCounter(0)
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      
    </div>
  )
}



import React,{useReducer} from 'react'

const initialVal={count:0}


const reducer=(state,action)=>{
    switch(action.type){
        case 'increment':
            return {count:state.count+1}
        case 'decrement':
            return {count:state.count-1}
        case 'reset':
            return {count:initialVal.count} 
        case 'default':
            return {state}
    }
}

export default function CounterFunction() {
    const [value,dispatch]=useReducer(reducer,initialVal)
  return (
    <div>

        <h1>{value.count}</h1>
        <button onClick={()=>dispatch({type:'increment'})}>increment</button>
        <button onClick={()=>dispatch({type:'decrement'})}>decrement</button>
        <button onClick={()=>dispatch({type:'reset'})}>reset</button>
      
    </div>
  )
}

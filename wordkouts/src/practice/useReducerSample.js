
import React, { useReducer } from 'react';


const initialStage={count:0};

const reducer=(state,action)=>{
    
    switch(action.type){
        case 'increment':
            return {count:state.count+1}
        case 'decrement':
            return {count:state.count-1}

        default:
            throw new Error()
    }
}



export default function UseReducerSample() {
    const [state,dispatch]=useReducer(reducer,initialStage)
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={()=>dispatch({type:'increment'})}>increment</button>
      <button onClick={()=>dispatch({type:'decrement'})}>decrement</button>
    </div>
  )
}

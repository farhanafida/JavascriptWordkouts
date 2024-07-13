import React,{useReducer} from 'react';


const initialValue={count:0,counterTwo:100}

const reducer=(state,action)=>{

    switch(action.type){
        case 'increment':
            return {...state,count:state.count+action.value}
        case 'decrement':
            return {...state,count:state.count-action.value}
        case 'incrementOne':
            return {...state,counterTwo:state.counterTwo+action.value}
        case 'decrementOne':
            return {...state,counterTwo:state.counterTwo-action.value}
        case 'reset':
            return initialValue
        default:
            return state
            
    }
}

export default function UseReducerObject() {
    const [count,dispatch]=useReducer(reducer,initialValue)
  return (
    <div>

        <h1>  {count.count} </h1>
        <button onClick={()=>dispatch({type:'increment',value:1})}>Increment</button>
        <button onClick={()=>dispatch({type:'decrement',value:1})}>Decrement</button>
        <button onClick={()=>dispatch({type:'increment',value:5})}>Increment 5</button>
        <button onClick={()=>dispatch({type:'decrement',value:5})}>Decrement 5</button>
        <h1>  {count.counterTwo} </h1>
        <button onClick={()=>dispatch({type:'incrementOne',value:1})}>Increment</button>
        <button onClick={()=>dispatch({type:'decrementOne',value:1})}>Decrement</button>
        <button onClick={()=>dispatch({type:'incrementOne',value:5})}>Increment 5</button>
        <button onClick={()=>dispatch({type:'decrementOne',value:5})}>Decrement 5</button>
        <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
      
    </div>
  )
}

import React, { useContext } from 'react';
import { Mycontext } from './ContextProblem';


export default function Comp3() {
    // const user=useContext(Mycontext)
    const {count,setCount}=useContext(Mycontext)
  return (
    <div>
        {/* {user} */}
        {/* <Mycontext.Consumer>
        {
            user=>(<h1>Hey,{user}</h1>)}
        </Mycontext.Consumer> */}
        {count}
        <button onClick={()=>setCount(count+1)}>Add</button>
    </div>
  )
}

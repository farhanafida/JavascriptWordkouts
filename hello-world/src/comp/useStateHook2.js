import  React, { useState } from "react"



function UseStateHookSample(){

    const initialValue=0
    const [count,changeVal]=useState(initialValue)

    const incrementFive = ()=>{
        for(let i=0;i<5;i++){
            changeVal (val => val +1 )
        }
    }

    return(
        <div>
            <h1 align='center'>{count}</h1>
            <button onClick={()=>changeVal(count+1)}>Increment</button>
            <button onClick={()=>changeVal(count-1)}>Decrement</button>
            <button onClick={()=>changeVal(initialValue)}>Reset</button>
            <button onClick={()=>incrementFive()}>Five</button>
        </div>
    )
}

export default UseStateHookSample;
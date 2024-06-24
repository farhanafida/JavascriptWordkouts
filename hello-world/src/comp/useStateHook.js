import React,{useState} from "react";



function CounterHook(){

    const [count,addVal] = useState(0)

    return(
        <div>
            <button onClick={()=> addVal(count+1) } > counter:{count} </button>
        </div>
    )
}


export default CounterHook;

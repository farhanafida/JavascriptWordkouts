// import React,{useRef} from 'react'

// export default function RenderCount() {

//     const inputReferance=useRef(1)

//     inputReferance.current+=1
//   return <h1>you rendered {inputReferance.current} times</h1>
// }


import React,{useState,useRef} from 'react';

export default function RenderCount() {
    const[value,setValue]=useState('');
    const vals=useRef(null)

    const handleButton=()=>{
        if(vals.current.value===''){
            alert('Must need a value')
        }
    }
  return (
    <div>

        <input type='text' value={value} onChange={(e)=>setValue(e.target.value)} ref={vals}/>
        <button onClick={handleButton}>click</button>
      
    </div>
  )
}

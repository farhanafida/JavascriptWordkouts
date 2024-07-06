import React,{useState} from 'react'

export default function Toggle() {

    const [toggle,setToggle]=useState(false)
          return (
    <div>
        <button onClick={()=>setToggle(!toggle)}>click here</button>

        {
            toggle?(<h1>hey</h1>):(<h1>hello</h1>)
        }
      
    </div>
  )
}

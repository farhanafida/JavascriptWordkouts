import React from 'react'

export default function ChildClass(props) {
    // destructuring
    // const {name}=props.val
  return (
    <div>
      
      {/* <h1> {props.val.name},{props.val.age} </h1> */}
      {/* <h1> {props.val}</h1> */}
      {/* {
      props.val.map(
        (obj,ind)=>(
            <ul>
                <li key={ind}>{obj}</li>
            </ul>
        )
      )
      } */}
      {/* destructuring
      <h1 > {name}</h1> */}

    </div>
  )
}

import React from 'react'

export default function Keys() {
    const vals=['ashkar','shameem','ruzana']
    const val=vals.map((name,key)=>(
        <li key={key}> {name} </li>
    ))
  return (
    <div>
        {val}
      
    </div>
  )
}


import React,{useState} from 'react'
import Child from './child';

export default function Parent() {

    const [data,setData]=useState('');

    const fromChild=(val)=>{
        setData(val)
    }

  return (
    <div>

        <h1>{data}</h1>


        <Child toParent={fromChild}/>
      
    </div>
  )
}

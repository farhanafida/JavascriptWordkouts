import React,{useState,useRef} from "react";
import './form.css';

export default function Form() {
    const[value,setVal]=useState('')

    const inputText=useRef(null)

    function handleSubmit(event){
        event.preventDefault();
        setVal('')
        display()
    }

    function display(){
        alert(`you entered ${value}`)
        inputText.current.focus();
    }
    
  return (
    <div className="dis">
        <form onSubmit={handleSubmit}>
    <input value={value} onChange={(e)=>setVal(e.target.value)} type="text" placeholder="Type here..." ref={inputText} />
    <button >Submit</button>
</form>
      
      <>
      {value.length>0?<h1>{value}</h1>:<h1></h1>}</>
    </div>
  )
}



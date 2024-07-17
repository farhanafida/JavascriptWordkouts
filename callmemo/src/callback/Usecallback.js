

import React,{useState,useCallback, memo} from 'react';
import { useNavigate } from 'react-router-dom';




const Button=memo(({handleClick,children})=> {
  const navigate=useNavigate();
  const handleNavigate=()=>{
      navigate('/useReducer');
  }
    console.log(`rendering button `,children);
  return (
    <div>
      <button onClick={handleNavigate}>Button Navigation</button>

        <button onClick={handleClick}>{children}</button>

    </div>
  )
})

const Count=memo(({text,val})=>{
    console.log(`Rendering ${text}`);
    return(
        <>

        <h1> {text} = {val} </h1>

        </>
    )
})


export default function Usecallback() {
    const [age,setAge]=useState(15);
    const [salary,setSalary]=useState(10000);
    
    const handleAge=useCallback(()=>{
        setAge(age+1)
    },[age])
    const handleSalary=useCallback(()=>{
        setSalary(salary+1000)
    },[salary])

  return (
    <div>

        <Count text='Age' val={age}/>
        <Button handleClick={handleAge}>Incrementing age</Button>
        <Count text='Salary' val={salary}/>
        <Button handleClick={handleSalary}>Incrementing salary</Button>

      
    </div>
  )
}

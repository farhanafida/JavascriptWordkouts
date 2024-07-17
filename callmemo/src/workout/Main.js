

import React,{useState,useCallback} from 'react';
import Heading from './Heading';
import Add from './Add';
import Text from './Text';

export default function Main() {
    const [age,setAge]=useState(20);
    const [salary,setSalary]=useState(1000);


    const handleAge=useCallback(()=>{
        setAge(age+1)
    },[age])
    const handleSalary=useCallback(()=>{
        setSalary(salary+1)
    },[salary])


  return (
    <div>

        <Heading/>
        <Text text='age' value={age}/>
        <Add handle={handleAge} >Incrementing age </Add>
        <Text text='salary' value={salary} />
        <Add handle={handleSalary} >Incrementing salary</Add>
      
    </div>
  )
}

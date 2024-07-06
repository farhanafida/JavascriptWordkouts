import React,{useState} from 'react';


export default function DynamicList() {
    const[value,setValue]=useState('')
    const[values,setValues]=useState([])

    const addButton=(()=>{
        setValues([...values,{id:Date.now(),text:value}]);
        setValue('');

    }
    )
    
    console.log(values)
  return (
    <div>
      <input value={value} onChange={(e)=>setValue(e.target.value)} type='text'/>
      <button onClick={()=>addButton()}>Add value</button>

      <div>
        {
            values.map(
                (obj,ind)=>(
                    <ul>
                        <li key={ind}>{obj.text}
                            <button onClick={()=>setValues(values.filter((obj2)=>obj2!==obj))}>Delete</button>
                        </li>
                    </ul>
                )
            )
        }
      </div>
    </div>
  )
}

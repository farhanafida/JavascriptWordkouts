

import React, { useEffect, useState } from 'react';

export default function FnTodo() {
    const [name,setName]=useState('');
    const [number,setNumber]=useState('');
    const [details,setDetails]=useState([]);
    const [id,setId]=useState(null);
    const [editText,setEditText]=useState('')

    useEffect(()=>{
      document.title='Todo app'
    })
    // useEffect(()=>{
    //   console.log(`updated detail:${number}`)
    // },[number])

    const handleButton=()=>{
        if (name.trim()==='')alert('Empty value not allowed');
        if(number.trim()===''){
            alert('Empty value not allowed');     
        }
        const existingNumber=details.find(obj=> obj.number===number.trim());
            if (existingNumber){
                alert('Entered numbere already exist');
                return;
            }

        
        setDetails([...details,{id:Date.now(),name:name,number:number}]);
        setName('');
        setNumber('');
    }


  const handleEdit= ((id,name)=>{
        setId(id);
        setEditText(name);
    }
  )
//   setToDos(toDos.map(todo => todo.id === id ? { ...todo, text: editText } : todo));
const saveText = (id) => {
    setDetails(details.map(data =>
      data.id === id ? { ...data, name: editText } : data
    ));
    setEditText(null);
    
  };
//   const saveText=(id)=>
//     {
//         setDetails(details.map(data => data.id===id ? {...data,name:editText}:data))
//     }
  


  return (
    <div>

        <>
        <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type='number' value={number} onChange={(e)=>setNumber(e.target.value)}/>

        <button onClick={()=>handleButton()}>Add</button>
        </>
        <div>
            {
                details.map((obj)=>(
                   <ul>
                    <li key={obj.id} >{
                    (obj.id===id?
                        (<>
                        <input type='text' value={editText} onChange={(e)=>setEditText(e.target.value)}/>
                        <button onClick={()=>saveText(obj.id)}>save</button>
                        </>):
                    (<>{obj.name},{obj.number}<button onClick={()=>handleEdit(obj.id,obj.name)}>Edit</button>
                    <button onClick={()=>setDetails(details.filter(person=>person.id!==obj.id))}>Delete</button></>))
                    }
                    </li>
                   </ul>
                ))
            }
        </div>
      
    </div>
  )
}

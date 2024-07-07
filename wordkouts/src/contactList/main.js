

import React, { useState } from 'react'

export default function Main() {
    const [name,setName]=useState('');
    const [number,setNumber]=useState('');
    const [details,setDetails]=useState([]);
    const [show,setShow]=useState(false);
    const [query,setQuery]=useState('');
    const [id,setId]=useState(null);
    const [editText,setEditText]=useState('')

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

  const filteredDetails = details.filter(person =>
    person.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleEdit= ((id,name)=>{
        setId(id);
        setEditText(name);
    }
  )

  console.log(filteredDetails);
  return (
    <div>

        <>
        <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type='number' value={number} onChange={(e)=>setNumber(e.target.value)}/>

        <button onClick={()=>handleButton()}>Add</button>
        <input type='text' value={query} onChange={(e)=>setQuery(e.target.value)}/>
        </>
        <div>
            {
                details.map((obj)=>(
                   <ul>
                    <li key={obj.id} onClick={()=>setShow(!show)}>{show===false ?
                    (<>{obj.name}<button onClick={()=>{setDetails(details.filter(person=>person.id!==obj.id))}}>Delete</button></>):
                    (obj.id===id?(<input type='text' value={editText} onChange={(e)=>setEditText(e.target.value)}/>):(<>{obj.name},{obj.number}<button onClick={()=>handleEdit(obj.id,obj.name)}>Edit</button>
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

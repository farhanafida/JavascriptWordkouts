

import React,{useState} from 'react';

export default function Child({toParent}) {
    const [text,setText]=useState('');

    const sendToParent=()=>{
        toParent(text);
    }

  return (
    <div>

        <input type='text' value={text} onChange={(e)=>setText(e.target.value)}/>

        <button onClick={sendToParent}>Send To Parent</button>
      
    </div>
  )
}

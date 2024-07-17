import React,{useState} from 'react'

function Text({text,value}) {
    console.log(`Rendered -${text}`);
    
  return (
    <div>

        <h1>{value}</h1>
      
    </div>
  )
}

export default React.memo(Text)
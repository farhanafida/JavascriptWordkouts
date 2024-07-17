import React from 'react'

function Add({handle,children}) {
    console.log(`Rendered ${children}`);
  return (
    <div>

       <button onClick={handle}>{children}</button>
      
    </div>
  )
}

export default React.memo(Add)

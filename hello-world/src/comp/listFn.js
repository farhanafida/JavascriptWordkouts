import React from 'react';

import Label from './classComp';

const ListVal=(props)=>{
  return(
    <div>
      <h1>hello {props.name} from {props.surname}</h1>
      <p> {props.children} </p>
    </div>
    
  )
}

// function ListVal(props){
//     return(
//   <div className='content1'><h1>Content head</h1>
  
//         </div>
  
//     )
//   }
export default ListVal
 
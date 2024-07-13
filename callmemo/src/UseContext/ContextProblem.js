
import React, { createContext, useState } from 'react';
import Comp1 from './comp1';

export const Mycontext=createContext();

export default function ContextProblem() {

    const [count,setCount]=useState(0)

  return (
    <div>
        {/* <Mycontext.Provider value={'ashkar'}>
        <Comp1/>
        </Mycontext.Provider> */}
        <Mycontext.Provider value={{count,setCount}}>
        <Comp1/>
        </Mycontext.Provider>

      
    </div>
  )
}





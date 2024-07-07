import React from 'react';

export default function FnComp({name}) {

    if(name==='ashkar'){
        throw new Error('ashkar is not allowed');
    }
  return (
    <div>
        {name}

    </div>
  )
}

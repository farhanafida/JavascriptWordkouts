import React from 'react';
import ChildClass from './ChildClass';

export default function SimpleProps() {
    // const val=0;
    // const val={name:'ashkar',age:23};
    // const val=['ashkar','ajnas'];

    const val={name:'ashkar'}
  return (
    <div>

        <ChildClass val={val}/>
      
    </div>
  )
}

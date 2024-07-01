

import React from 'react';

import './display.css' ;

export default function Display(props) {
  return (
    <div className='display'>
        <>
        <h1>{props.name}</h1>
        <h1>{props.email}</h1>
        </>  
    </div>
  )
}

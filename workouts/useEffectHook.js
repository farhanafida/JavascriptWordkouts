

import React,{useEffect} from 'react'

export default function useEffectHook() {
    useEffect(
        ()=>{(
            console.log('Example for componentdidMount')
        )
        return (
            console.log('Component unmount')
        ),[]}
    )
  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}

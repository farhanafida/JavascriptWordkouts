import React,{useEffect,useState} from 'react'

export default function LifeCycleHook() {

    const[count,setCount]=useState(0)
    useEffect(() => {
        // Code to run on mount
        console.log('Component mounted');
    
        return () => {
          // Code to run on unmount
          console.log('Component unmounted');
        };
      }, []);

    useEffect(()=>
    {
        console.log(`updating the count value. Count:${count}`)
    },[count])

  return (
    <div>
      useEffect Example
      <button onClick={()=>setCount(count+1)}>Click</button>
    </div>
  )
}

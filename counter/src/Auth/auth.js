import { useState } from "react";
import { auth } from "../configFolder/config";
import { createUserWithEmailAndPassword } from "firebase/auth";


export const Auth=()=>{
    const [mail,setMail]=useState('');
    const [password,setPassword]=useState('')

    
    const signIn=async()=>{
        await createUserWithEmailAndPassword(auth,mail,password)

    }
    return(
        <>
        <input type="text" placeholder="Enter Mail..." onChange={(e)=>setMail(e.target.value)}/>
        <input type="password" placeholder="Enter Password..." onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={signIn}>signIn</button>
        </>
    )
}
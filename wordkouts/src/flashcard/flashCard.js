

import React, { useState } from 'react'

export default function FlashCard() {

    const [id,setId]=useState(null)

    const card=[
        {id:10,
        question:'Your nationality?',
        answer:'indian'},
        {id:11,
            question:'your state?',
            answer:'kerala'
        }

        ]
        

  return (
    <div>

        {
            card.map((obj)=>(
                <ul>
                    <li key={obj.id} onClick={()=>obj.id===id?setId(null):setId(obj.id)} >{id===obj.id?obj.answer:obj.question}</li>
                </ul>
            ))
        }
      
    </div>
  )
}

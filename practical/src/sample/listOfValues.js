
import React from 'react'

export default function ListOfValues(props) {
  return (
    <div>

        {
            props.names.map((obj,ind)=>{
                return(
                    <div>
                        <ul>
                            <li key={ind}>value:{obj}</li>
                        </ul>

                    </div>
                )
            })
        }
      
    </div>
  )
}

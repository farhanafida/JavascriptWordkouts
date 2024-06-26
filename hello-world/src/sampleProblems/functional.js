

import React from "react";

function FunctionalComponent(props){
    return <h1>
        {props.name.map(
            (name,key)=>(<div><p key={key}>hey {name}</p>  <span>How are you?</span></div>)
            
        )}
    </h1>
    
}

export default FunctionalComponent;



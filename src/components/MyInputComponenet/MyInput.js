import React from "react";
import './style.css'
function MyInput(props){



return(
    <div class='root'>
        <p>{props.text}</p>
        <input id={props.id} placeholder={props.placeholder}/>

    </div>
)
}

export default MyInput;
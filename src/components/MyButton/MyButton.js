import React from "react";
function MyButton(props){


return(
    <button onClick={props.click}>{props.text}</button>
)
}

export default MyButton;
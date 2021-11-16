import React from "react";
import './style.css';

function MyTabs(props){
    

return(
    <div className='Tabs'>

        {props.children}

    </div>
)
}

export default MyTabs;
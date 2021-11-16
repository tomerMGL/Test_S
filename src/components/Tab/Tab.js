import React from "react";

function Tab(props){

    const openPage = () => {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
        if(document.getElementById(props.id)){
            document.getElementById(props.id).style.display='block';
            document.getElementById(props.id).style.background=props.color;
        }

    }

return(
    <div>

<button className="tablink" onClick={openPage}>{props.title}</button>

<div id={props.id} className="tabcontent">
  <h3>{props.title}</h3>
  {props.children}
</div>



    </div>
)
}

export default Tab;
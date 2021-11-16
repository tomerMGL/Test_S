import React from "react";
import MyTabs from "./components/MyTabs/MyTabs";
import Tab from "./components/Tab/Tab";
import MyInput from "./components/MyInputComponenet/MyInput";
import MyButton from "./components/MyButton/MyButton";
import MyLabel from './components/MyLabel/MyLabel'

const componentMap={
    MyTabs:MyTabs,
    MyInput:MyInput,
    MyButton:MyButton,
    MyLabel:MyLabel
}

function renderer(config) {
  if (typeof componentMap[config.base_component] !== "undefined") {
    return React.createElement(
        componentMap[config.base_component],
      {id:config.id},
      config.base_component === 'MyTabs'?
      config.children.map(x => renderTabs(x)):''

    );
  }


}

function renderTabs(config) {

  if (typeof config !== "undefined") {
    return React.createElement(
        Tab,
      {id:config.title, title:config.title ,color:'#8EB1C7'},
        
      config.components.map(x => renderComponentTabs(x))

    );
  }
}

function renderComponentTabs(config) {

  if (typeof componentMap[config.base_component] !== "undefined") {
    return React.createElement(
        componentMap[config.base_component],
      {
        id:config.id,
        text:config.text,
        click: ()=>{
            let source=document.getElementById({...config.click}.source_id);
            let target=document.getElementById({...config.click}.target_id);
            
            if(!source.value == '')
                target.style.backgroundColor='green';
                else
                target.style.backgroundColor='red';
        },
        placeholder:{...config.attributes}.placeholder
      },
        

    );
  }
}

export default renderer;
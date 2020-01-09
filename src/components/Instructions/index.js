import React from "react";
import "./style.css";

function Instructions(props) {
//   return (<h3 className="instructions">{props.children}</h3>)
  return (
  <div>
    <h2 className="instructions">Test your memory.</h2>
    <h3>You win by clicking on each of the images only once.<br></br>
    Your Current Score increases by one for each click.<br></br>
    If you click on an image twice you lose.<br></br> You can start a 
   new game by clicking on an image.<br></br>
   Your Top Score is displayed until the page is exited of refreshed.</h3>
   </div>)
}

export default Instructions;

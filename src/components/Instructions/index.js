import React from "react";
import "./style.css";

function Instructions(props) {
//   return (<h3 className="instructions">{props.children}</h3>)
  return (<h3 className="instructions">Test your memory. <br></br>You win by clicking on
   each of the images only once.<br></br>Your Current Score increases by one for each 
   click.<br></br> If you click on an image twice you lose.<br></br> You can start a 
   new game by clicking on an image.<br></br>Your Top Score is 
   displayed until you exit the page.</h3>)
}

export default Instructions;

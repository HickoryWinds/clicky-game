import React from "react";
import "./style.css";

function FriendCard(props) {
  // console.log('props');
  // console.log(props.id);
  // console.log(props.guessed);

  // console.log(props.indexOf(props.id));
  return (
    <div className="card">
      {/* <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      
      <span onClick={() => props.removeFriend(props.id, props.guessed)} className="remove">
        x
      </span> */}
      <div className="img-container">
        <img alt={props.name} src={props.image} onClick={() => props.removeFriend(props.id, props.guessed)} className="remove"/>
      </div>
      
      {/* <span onClick={() => props.removeFriend(props.id, props.guessed)} className="remove">
        x
      </span> */}
      {/* <span onClick={() => props.handleIncrement(props.id)} className="cscore">
        +
      </span>
      <span onClick={() => props.handleDecrement(props.id)} className="tscore">
        -
      </span> */}
    </div>
  );
}

export default FriendCard;

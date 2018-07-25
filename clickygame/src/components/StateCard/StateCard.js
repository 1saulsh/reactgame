
import React from "react";
import "./StateCard.css";

const StateCard = props => (
  <div className="click-item neutral" onCLick = {() => {props.increment(props.id);props.shuffle(props.id); }}>
    
    <img className="flag-image" alt={props.name} src={props.image} />
  </div>
    
);
//eport default: statecard
export default StateCard;

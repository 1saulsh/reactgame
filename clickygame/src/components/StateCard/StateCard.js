
import React from "react";
import "./StateCard.css";

const StateCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.flag} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>State:</strong> {props.flag}
        </li>
      </ul>
    </div>
    <span onClick={() => props.removeState(props.id)} className="remove">
      𝘅
    </span>
  </div>
);

export default StateCard;

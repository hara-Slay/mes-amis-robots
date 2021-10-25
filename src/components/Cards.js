/** @format */

import React from "react";
import "./Cards.css";

const Cards = (props) => {
  return (
    <div className='myCard'>
     
      <img className='imageRobot' src={props.src} alt=''></img>
      <div className='detailsRobots'>
        <h2>{props.nom}</h2>

        <p>{props.email}</p>
      </div>
    </div>
  );
};

export default Cards;

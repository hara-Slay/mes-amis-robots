/** @format */

import React from "react";
import "./Cards.css";
import image from "./bibliotete.jpg";

const Cards = (props) => {
  return (
    <div className='myCard'>
      {/*  src={`https://robohash.org/${id}`} alt=''></img> */}
      <img className='imageRobot' src={props.src} alt=''></img>
      <div className='detailsRobots'>
        <h2>{props.nom}</h2>

        <p>{props.email}</p>
      </div>
    </div>
  );
};

export default Cards;

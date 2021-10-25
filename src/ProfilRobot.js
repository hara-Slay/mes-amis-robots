/** @format */

import React from "react";
import "./ProfilRobot.css";

const ProfilRobot = (props) => {
  return (
    <div>
      <div className='sectionProfil'>
        <div className='imgContainer'>
          <div className='myCard'>
            {/*  src={`https://robohash.org/${id}`} alt=''></img> */}
            <img className='imageRobot' src="https://robohash.org/2" alt=''></img>
            <div className='detailsRobots'>
              <h2>Clementina</h2>

              <p>email.Com</p>
            </div>
          </div>
        </div>
        <div className='profilContainer'>
          <ul >
            <li>name:"Leanne Graham"</li>
            <li>email:"Bret"</li>
            <li>username:"Sincere@april.biz"</li>
            <li>adress: "Kulas Light"</li>
            <li>"street" "Kulas Light"</li>
            <li>"suite": "Kulas Light"</li>
            <li>""city: "Kulas Light"</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfilRobot;

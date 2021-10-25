/** @format */

import React, { useEffect, useState } from "react";
import Cards from "./components/Cards";
import SearchBox from "./components/SearchBox";
import Title from "./components/Title";
import "./App.css";
import axios from "axios";
import ProfilRobot from "./ProfilRobot";

const App = () => {
  //const [state, setstate] = useState([]);

  const [Robots, setRobots] = useState([]);

  useEffect(() => {
    const getDataRobot = async () => {
      const robots = await axios.get(
        "http://jsonplaceholder.typicode.com/users"
      );
      setRobots(robots.data);
    };
    getDataRobot();
  }, []);
  // const change = (e) => {
  //   const filterdRobot = Robots.filter((element) => {
  //     return element.name.toLowerCase().includes(e.target.value.toLowerCase())
  //   })
  //   console.log(filterdRobot);
  //   setRobotsTampon(filterdRobot);
  // }

  return (
    <div className='appbody'>
      <Title />
      <SearchBox />
      <ProfilRobot/>
      {/* onchange={change} */}

      <div className='cardcontainer'>
        {Robots.map(function (element) {
          return (
            // ici on retourne les elets ou objets qui vont se multiplier a chak fois qu'on les appelera

            <Cards
              src={`https://robohash.org/${element.id}`}
              nom={element.name}
              email={element.email}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;

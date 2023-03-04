import React from "react";
import { FaUsers } from "react-icons/fa";
import "../Styles/MainContainer.css";
import { Banner } from "./Banner";

function MainContainer() {
  return (
  <div className="mainContainer">
    <Banner />

    <div className="menuList">
      <ul>
        <li><a href="#">Popular</a></li>
        <li><a href="#">Albums</a></li>
        <li><a href="#">Songs</a></li>
        <li><a href="#">Fans</a></li>
        <li><a href="#">About</a></li>
      </ul>

      <p><i><FaUsers /></i>11.3M <span>
        Followers</span></p>
    </div>
  </div>
);
}

export  { MainContainer };
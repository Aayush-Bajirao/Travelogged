import React from "react";
import { Button } from "@material-ui/core";

const navbar = () => {
  return (
    <div>
      <nav>
        <div className="nav-items">
          <a  className="nav-a" href="#banner">Travelogged</a>
          <ul className="nav-menu">
            <li><a  className="white1" href="#">Pricing</a></li>
            <li><a  className="white1" href="#iterary">Itinerary</a></li>
            <li><a  className="white1" href="#about">About us</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default navbar;

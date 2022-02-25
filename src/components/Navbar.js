import React from "react";
import { Button } from "@material-ui/core";

const navbar = () => {
  return (
    <div>
      <nav>
        <div className="nav-items">
          <a  className="nav-a" href="#">Travelogged</a>
          <ul className="nav-menu">
            <li>Pricing</li>
            <li>Itinerary</li>
            <li>About Us</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default navbar;

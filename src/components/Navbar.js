import React from "react";

const navbar = () => {
  function Fade() {
    document.getElementById("iterary").classList.add("aa");
    setTimeout(fadecan, 4000);
  }
  function fadecan() {
    document.getElementById("iterary").classList.remove("aa");
  }

  function FadeAbout() {
    document.getElementById("about").classList.add("aa");
    setTimeout(fadecanAbout, 4000);
  }
  function fadecanAbout() {
    document.getElementById("about").classList.remove("aa");
  
  }

  function Fadeab() {
    document.getElementById("motion").classList.add("aa");
    setTimeout(fadecanAb, 4000);
  }
  function fadecanAb() {
    document.getElementById("motion").classList.remove("aa");
  }

  return (
    <div>
      <nav>
        <div className=" nav-items">
          <a className="ll nav-a" href="#banner">
            Travelogged
          </a>
          <ul className="rr nav-menu">
            <li>
              <a className="white1" href="#">
                Pricing
              </a>
            </li>
            <li>
              <a onClick={Fade} className="white1" href="#iterary">
                Itinerary
              </a>
            </li>
            <li>
              <a onClick={Fadeab} className="white1" href="#about">
                About us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default navbar;

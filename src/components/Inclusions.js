import React from "react";
import Marquee from "react-fast-marquee";


const inclusions = () => {
  return (
    <div>
      <div className="container">
        <div className="title">
          <h2>Inclusions</h2>
        </div>
        <div className="timeline-text fnt-siz">
          <center>
            <p>
              We include Everything in our plans which you might need while
              Travelling
            </p>
            <div className="inc-img">
           

              <div className="transportation"></div>
              <div className="meals"></div>
              <div className="stays"></div>
              <div className="guide"></div>
              

            </div>
          </center>
          <div id="lone" className="title">
          <h2>Why Travelogged</h2>
        </div>
        <center>
            <p>
            Travelogged is new age technology driven Travel Company. We specialise in Group Departures at affordable prices.
            </p>
            <div className="three">
              <div className="dflex sizee">
              <div className="dflex ">
              <div className="pp rating"></div>              
              <p>500+ REVIEWS</p>
              </div> 
              <div className="dflex ">
              <div className="pp map"></div>              
              <p>120+ GROUP DEPARTURES</p>
              </div>
              <div className="dflex ">
              <div className="pp happy"></div>              
              <p>2000 + HAPPY TRAVELLERS</p>
              </div>
                           
              </div>
            </div>
          </center>
        </div>
      </div>
    </div>
  );
};

export default inclusions;
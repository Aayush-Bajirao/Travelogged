import React from "react";
import { FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <center>
      <div className="footer">
        <div className="container con dflex">
          <div className="inc-img">
              <a className="black" href='#'>
            <div className="logo2"></div>©2022 Travelogged
            </a>
          </div>
          <div>
            <h5>Company</h5>
            <ul>
              <li>
                <a className="black" href="#about">About us</a>
              </li>
              <li>
                <a className="black" href="#about">Blog</a>
              </li>
              <li>
                <a className="black" href="#about">Testimonals</a>
              </li>
            </ul>
          </div>
          <div>
            <h5>Support</h5>
            <ul>
              <li>
                <a className="black" href="#about">Contact us</a>
              </li>
              <li>
                <a className="black" href="#about">Help center</a>
              </li>
            </ul>
          </div>
          <div className="po">
            <h5>Follow Us</h5>
            <ul className="dflex">
              <li>
                <a href="https://twitter.com/">
                  <FaTwitter color="black"/>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/">
                  <FaYoutube color="black"/>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/feed/">
                  <FaLinkedin color="black"/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </center>
  );
}

export default Footer;

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
                <a href>About us</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Testimonals</a>
              </li>
            </ul>
          </div>
          <div>
            <h5>Support</h5>
            <ul>
              <li>
                <a href>Contact us</a>
              </li>
              <li>
                <a>Help center</a>
              </li>
            </ul>
          </div>
          <div className="po">
            <h5>Follow Us</h5>
            <ul className="dflex">
              <li>
                <a href>
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a>
                  <FaYoutube />
                </a>
              </li>
              <li>
                <a>
                  <FaLinkedin />
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

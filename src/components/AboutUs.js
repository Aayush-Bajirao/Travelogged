import React from 'react';
import {FaInstagram, FaFacebookF, FaWhatsapp} from "react-icons/fa"


function AboutUs() {
  return (
    <>
    <div id='about' className='about'>
      <h1>
        Social network
      </h1>
      <div className='social_media'>
        <li>
        <a href><FaInstagram fontSize={"40px"} color={"red"}/></a>
        </li>
        <li>
        <a><FaFacebookF fontSize={"37px"}  color={"blue"}/></a>
        </li>
        <li>
        <a><FaWhatsapp fontSize={"42px"}  color={"green"}/></a>
        </li>
      </div>
    </div>

    
    </>
  )
}

export default AboutUs
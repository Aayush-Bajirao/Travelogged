import React from 'react';
import {FaInstagram, FaFacebookF, FaWhatsapp} from "react-icons/fa"


function AboutUs() {
  return (
    <>
    <div className='about'>
      <h1>
        Social network
      </h1>
      <div className='social_media'>
        <li>
        <a target='_blank' href='https://travelogged-kedarnath.unicornplatform.page/www.instagram.com/travelogged.in'><FaInstagram fontSize={"40px"} color={"red"}/></a>
        </li>
        <li>
        <a target='_blank' href='https://www.facebook.com/Travelogged.in.India/'><FaFacebookF fontSize={"37px"}  color={"blue"}/></a>
        </li>
        <li>
        <a target='_blank' href='https://api.whatsapp.com/send?phone=7717297753&text=I%20want%20to%20book%20Kedarnath%20Trip'><FaWhatsapp fontSize={"42px"}  color={"green"}/></a>
        </li>
      </div>
    </div>

    
    </>
  )
}

export default AboutUs
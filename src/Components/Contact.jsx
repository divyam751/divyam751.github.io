import React, { useEffect } from "react";
import AOS from "aos";
import Typewriter from "typewriter-effect";
import TypewriterComponent from "./elements/TypewriterComponent";
import { BiSolidPhoneCall } from "react-icons/bi";
export default function Contact() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section
      data-aos='fade-up'
      className='contact-continer sections'
      id='contact'
    >
      <h1 className='heading'>
        <span className='sauce'> Contact Me </span>
      </h1>
      <div data-aos='fade-up' className='flex-center'>
        <h1 className='title'>Get In Touch</h1>
        <p style={{ textAlign: "center", "": 700 }}>
          Please contact or email me at your convenience.
        </p>
        <TypewriterComponent />
        {/* <a className='contact-button' href='mailto:mi.divyam@gmail.com'>
            Send an email
          </a> */}

        {/* changes start */}
        <div class='card' id='contact-phone'>
          <div class='card-inner'>
            <div class='card-front'>
              {/* <p>Make contact</p> */}
              <BiSolidPhoneCall />
              <p style={{ paddingLeft: 15 }}> 9719635838</p>
            </div>
            <div class='card-back'>
              <a className='contact-button2' href='tel:+919719635838'>
                <p>+91 9719635838</p>
              </a>
            </div>
          </div>
        </div>
        {/* changes end*/}

        {/* <div id='contact-phone' className='button-container'>
          <a className='contact-button' href='tel:+919719635838'>
            Make contact
          </a>
        </div> */}
      </div>
    </section>
  );
}

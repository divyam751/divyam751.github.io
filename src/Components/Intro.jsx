import React from "react";
import img1 from "../images/pictures/personal.jpg";
import Typewriter from "typewriter-effect";
import resume from "../resume/Divyam-Chauhan-Resume.pdf";
import bg1 from "../images/pictures/wave-haikei.svg";

export default function Intro({ handleClick, boolean }) {
  // ===========
  const handleDownload = () => {
    window.open(
      "https://drive.google.com/file/d/1AqZMjnPacKIcH8d_YNiV7STc2LpO08Uw/view?usp=sharing",
      "_blank"
    );
  };
  // ==============
  return (
    <div
      id='home'
      style={{
        paddingTop: "10px",
        backgroundImage: `url(${bg1})`,
        backgroundPosition: "bottom", // Position the background at the bottom
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className='hero'
      onClick={() => {
        if (boolean === false) handleClick();
      }}
    >
      <div className='home-img-cont'>
        <div class='outer-circle circle circle-1'>
          <span class='sq sq-1'></span>
          <span class='inner-circle circle'>
            <img className='home-img' src={img1} alt='personal' />
          </span>
          <span class='sq sq-2'></span>
        </div>
      </div>
      <div className='intro give-padding contain'>
        <div className='txt-light-red twent'>
          Hello...<span className='wave'> 👋🏻</span>, My name is
        </div>
        <div id='user-detail-name' className='bio name lighter-red'>
          Divyam Chauhan.
        </div>
        <div className='bio what-i-do'>
          <Typewriter
            options={{
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Frontend Developer.")
                .pause(2000)
                .deleteAll()
                .typeString("Backend Developer.")
                .pause(2000)
                .deleteAll()
                .typeString("Full Stack Developer.")
                .pause(2000)
                .deleteAll()
                .start();
            }}
          />
        </div>
        <div>
          <div className='info'>
            I am a passionate and dedicated to creating innovative and efficient
            web solutions.
          </div>
        </div>
        <div className='button-container'>
          <a className='contact-button' href='#contact'>
            Contact
          </a>
          {/* ================= */}
          {/* <a
            href={resume}
            onClick={handleDownload}
            rel='noreferrer'
            download={"Divyam-Chauhan-Resume"}
            id='resume-button-2'
            className='contact-button nav-link resume resume-button second-btn'
          >
            Resume
          </a> */}
          {/* ============= */}
        </div>
      </div>
    </div>
  );
}

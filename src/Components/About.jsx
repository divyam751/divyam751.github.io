import React, { useEffect } from "react";
import resume from "../resume/Divyam-Chauhan-Resume.pdf";
import AOS from "aos";

export default function About() {
  const handleDownload = () => {
    window.open(
      "https://drive.google.com/file/d/1AqZMjnPacKIcH8d_YNiV7STc2LpO08Uw/view?usp=sharing",
      "_blank"
    );
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section
      data-aos='fade-up'
      className='about section sections'
      id='about'
      style={{ paddingTop: "200px", paddingBottom: "400px" }}
    >
      <h1 data-aos='fade-up' className='heading'>
        <span className='sauce'>About Me</span>
      </h1>
      <div>
        <div data-aos='fade-up' className=' first'>
          <p id='user-detail-intro'>
            Welcome to my coding realm, where I transform coffee into lines of
            code!{" "}
            <p style={{ display: "inline-block" }} className='sauce'>
              I'm Divyam &nbsp;
            </p>
            A Full Stack Developer, Expertise in both front-end and back-end
            development, I thrive on turning complex ideas into functional and
            visually appealing applications.with expertise in HTML, CSS,
            JavaScript, React JS, MongoDB, Express, and Node JS. Through this
            website, I invite you to explore my work, projects, and skills,
            which demonstrate my commitment to delivering high-quality and
            scalable software solutions. Join me on this journey as we explore
            the world of technology and unlock endless possibilities together.
            <br />
          </p>
          <br />
        </div>
        <a
          onClick={handleDownload}
          rel='noreferrer'
          href={resume}
          download={"Divyam-Chauhan-Resume"}
          id='resume-button-2'
          className='contact-button resume-button second-btn'
        >
          Resume
        </a>
      </div>
    </section>
  );
}

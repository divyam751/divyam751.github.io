import React, { useEffect } from "react";
import resume from "../resume/Divyam-Chauhan-Resume.pdf";
import AOS from "aos";

export default function About() {
  const handleDownload = () => {
    const resLink = document.createElement("a");
    resLink.href = resume;
    resLink.download = "Divyam-Chauhan-Resume";
    resLink.click();

    window.open(
      "https://drive.google.com/file/d/1QLvELukHGjnVJKjvfmMmA5DoDHMVSEYY/view?usp=sharing",
      "_blank",
    );
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section
      data-aos='fade-up'
      className='about section about-section'
      id='about'
    >
      <h1 data-aos='fade-up' className='heading'>
        <span className='sauce'>
          <b> About Me </b>
        </span>
      </h1>
      <div>
        <div data-aos='fade-up' className=' first'>
          <p id='user-detail-intro'>
            Welcome to my coding realm, where I transform coffee into lines of
            code!{" "}
            <p style={{ display: "inline-block" }} className='sauce'>
              I'm Divyam, &nbsp;
            </p>
            a Full Stack Developer with expertise in both front-end and back-end
            development. I thrive on turning complex ideas into functional and
            visually appealing applications. My tech stack includes HTML, CSS,
            JavaScript, React.js, Redux, MongoDB, Express.js, and Node.js, which
            enables me to deliver high-quality and scalable software solutions.
            Through this website, I invite you to explore my work, projects, and
            skills, which demonstrate my commitment to utilizing this robust
            technology stack to unlock endless possibilities in the world of
            technology. Join me on this journey as we delve deeper into the
            exciting world of coding and development!
            <br />
          </p>
          <br />
        </div>
        <button
          id='resume-button-2'
          className='glassmorphic-link'
          onClick={() => handleDownload()}
        >
          Resume
        </button>
      </div>
    </section>
  );
}
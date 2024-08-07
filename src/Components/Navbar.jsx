import resume from "../resume/Divyam-Chauhan-Resume.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Logo from "./elements/Logo";
import ResumeButton from "./elements/ResumeButton";
import { Link } from "react-scroll";
export default function Navbar({ handleClick, boolean }) {
  const handleDownload = () => {
    window.open(
      "https://drive.google.com/file/d/1BMz-qSD5BhCU2CN-SZVkKpnGLiBkLefX/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <nav id="nav-menu" onClick={handleClick}>
      <div id="logo-nav">
        <h1 className="nav-link home">
          <a href="#home">
            <Logo />
          </a>
        </h1>
        <div className="ham-container">
          <span className="ham">
            <FontAwesomeIcon icon={boolean ? faBars : faXmark} />
          </span>
        </div>
      </div>
      <ul
        className={boolean ? "hide" : ""}
        style={{ background: " #002233", marginTop: -10 }}
      >
        <li>
          <Link to="home" spy={true} smooth={true} offset={50} duration={500}>
            Home
          </Link>
        </li>
        <li className="nav-link about">
          <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
            About
          </Link>
        </li>
        <li className="nav-link skills">
          <Link to="skills" spy={true} smooth={true} offset={50} duration={500}>
            Skills
          </Link>
        </li>
        <li className="nav-link projects">
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className="nav-link contact">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Contact
          </Link>
        </li>
        <li className="nav-link resume">
          <a
            href={resume}
            onClick={handleDownload}
            rel="noreferrer"
            download={"Divyam-Chauhan-Resume"}
            id="resume-button-1"
          >
            <center>
              {" "}
              <ResumeButton />
            </center>
          </a>
        </li>
      </ul>
    </nav>
  );
}

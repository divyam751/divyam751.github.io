import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitterSquare,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer>
      <div className='footer-container'>
        <div className='socials'>
          <ul id='social-icons'>
            <li id='contact-github'>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://github.com/divyam751'
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li id='contact-linkedin'>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://www.linkedin.com/in/divyam751/'
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>

            <li id='contact-instagram'>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://www.instagram.com/divyamchauhan_1507/'
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>

            <li id='contact-twitter'>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://twitter.com/divyam_mi'
              >
                <FontAwesomeIcon icon={faTwitterSquare} />
              </a>
            </li>
          </ul>
        </div>
        <div className='copyright'>
          <a href='https://github.com/divyam751'>
            Designed and Created by Divyam Chauhan{" "}
            <FontAwesomeIcon icon={faHeart} />
          </a>
        </div>
        <a href='mailto:mi.divyam@gmail.com' id='contact-email'>
          mi.divyam@gmail.com
          <hr />
        </a>
      </div>
    </footer>
  );
}

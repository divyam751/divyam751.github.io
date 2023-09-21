import React, { useEffect } from "react";
import {
  SiChakraui,
  SiExpress,
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiRedux,
} from "react-icons/si";
import { TbBrandOauth } from "react-icons/tb";
import { BiLogoNetlify } from "react-icons/bi";

import AOS from "aos";

export const Skills = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section data-aos='fade-up' className='skills-section' id='skills'>
      <h1 data-aos='fade-up' className='heading'>
        <span className='sauce'>
          {" "}
          <b>Skills</b>{" "}
        </span>
      </h1>
      <p data-aos='fade-up'>
        Here are a few Technologies I’ve been working with recently:
      </p>

      <div style={{ paddingBottom: 20 }}></div>
      <ul
        data-aos='fade-up'
        className='skills-list'
        style={{ color: "orange" }}
      >
        <li className='skills-card'>
          <div className='skills-card-name'>
            <img
              src='https://cdn-icons-png.flaticon.com/512/732/732212.png'
              alt='HTML'
              width={30}
              height={30}
              className='skills-card-img'
            />
            HTML
          </div>
        </li>
        <li className='skills-card'>
          <div className='skills-card-name'>
            <img
              src='https://miro.medium.com/v2/resize:fit:3614/1*5z5g2wKCOUqWHPBbFjNbfA.png'
              alt='CSS'
              width={30}
              height={30}
              className='skills-card-img'
            />
            CSS
          </div>
        </li>
        <li className='skills-card'>
          <div className='skills-card-name'>
            <SiJavascript size={30} class='skills-card-img' color='yellow' />{" "}
            JavaScript
          </div>
        </li>
        <li className='skills-card'>
          <div className='skills-card-name'>
            <img
              src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png'
              alt='React.js'
              width={30}
              height={30}
              className='skills-card-img'
            />
            React.js
          </div>
        </li>
        <li className='skills-card'>
          <div className='skills-card-name'>
            <SiRedux size={30} class='skills-card-img' color='#764abc' /> Redux
          </div>
        </li>
        <li className='skills-card'>
          <div className='skills-card-name'>
            <SiChakraui size={30} class='skills-card-img' color='white' />{" "}
            Chakra UI
          </div>
        </li>
        <li className='skills-card'>
          <div className='skills-card-name'>
            <SiNodedotjs size={30} class='skills-card-img' color='green' />{" "}
            Node.js
          </div>
        </li>
        <li className='skills-card'>
          <div className='skills-card-name'>
            <SiExpress size={30} class='skills-card-img' color='white' />{" "}
            Express.js
          </div>
        </li>
        <li className='skills-card'>
          <div className='skills-card-name'>
            <SiMongodb size={30} class='skills-card-img' color='green' />{" "}
            MongoDB
          </div>
        </li>
        <li className='skills-card'>
          <div className='skills-card-name'>
            <TbBrandOauth size={30} class='skills-card-img' color='gray' />{" "}
            OAuth
          </div>
        </li>
        <li className='skills-card'>
          <div className='skills-card-name'>
            <img
              src='https://avatars.githubusercontent.com/u/7552965?s=280&v=4'
              alt='mongoose'
              width={30}
              height={30}
              className='skills-card-img'
            />
            Mongoose.js
          </div>
        </li>
        <li className='skills-card'>
          <div className='skills-card-name'>
            <img
              src='https://cdn-icons-png.flaticon.com/512/2164/2164832.png'
              alt='Rest API'
              width={30}
              height={30}
              className='skills-card-img'
            />
            Restful API
          </div>
        </li>
      </ul>

      <p data-aos='fade-up' style={{ marginTop: "3rem" }}>
        Here are a few Tools I’ve been working with recently:
      </p>
      <div style={{ paddingBottom: 20 }}></div>
      <ul
        // data-aos='fade-up'
        className='skills-list'
        style={{ color: "orange" }}
      >
        <li className='skills-card'>
          <div className='skills-card-name'>
            <img
              src='https://code.visualstudio.com/assets/images/code-stable.png'
              alt='postman'
              width={30}
              height={30}
              className='skills-card-img'
            />
            VS Code
          </div>
        </li>
        <li className='skills-card'>
          <div className='skills-card-name'>
            <img
              src='https://www.svgrepo.com/show/354202/postman-icon.svg'
              alt='postman'
              width={30}
              height={30}
              className='skills-card-img'
            />
            Postman
          </div>
        </li>
        <li className='skills-card'>
          <div className='skills-card-name'>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1200px-Vitejs-logo.svg.png'
              alt='vite'
              width={30}
              height={30}
              className='skills-card-img'
            />
            Vite
          </div>
        </li>
        <li className='skills-card'>
          <div className='skills-card-name'>
            <BiLogoNetlify
              size={30}
              className='skills-card-img'
              color='#25c7b7'
            />
            Netlify
          </div>
        </li>
        <li className='skills-card'>
          <div className='skills-card-name'>
            <SiGithub size={30} className='skills-card-img' color='white' />
            GitHub
          </div>
        </li>
        <li className='skills-card'>
          <div className='skills-card-name'>
            <img
              src='https://cdn-icons-png.flaticon.com/512/5278/5278402.png'
              alt='AI'
              width={30}
              height={30}
              className='skills-card-img'
            />
            AI Tools
          </div>
        </li>
      </ul>
    </section>
  );
};

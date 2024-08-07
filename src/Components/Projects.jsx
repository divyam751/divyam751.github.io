import React, { useEffect, useState } from "react";
import "./Style.css";
import laptop from "../images/pictures/laptop.png";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import getProjects from "../data/data";
import AOS from "aos";

const Projects = () => {
  const [projects, setProjects] = useState(getProjects());

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section data-aos="fade-up" className="pro-continer" id="projects">
      <h1 style={{ fontSize: 40, paddingBottom: 20, marginTop: 200 }}>
        Projects
      </h1>
      {projects?.map((project, index) => {
        return (
          <>
            <div
              className="pro-parentBox project-card"
              data-aos="fade-up"
              key={project.id}
            >
              <div className="pro-childBox1">
                <img src={laptop} alt="laptop" className="pro-laptop-Img" />

                <div className="pro-grandChaildBox3">
                  <img
                    src={require(`../images/projects/${project.image}`)}
                    alt="pro-img"
                    className="pro-project-image"
                  />
                </div>
              </div>
              <div className="pro-chaildBox2">
                <div className="pro-project-info">
                  <div className="pro-project-titleSection">
                    <h1 class="project-title"> {project.projectTitle}</h1>
                    <div className="pro-project-links">
                      <a
                        className="project-github-link"
                        rel="noreferrer"
                        target="_blank"
                        href={project.projectLinkGithub}
                      >
                        <FontAwesomeIcon icon={faGithub} color="black" />
                      </a>
                      <a
                        className="project-deployed-link"
                        rel="noreferrer"
                        target="_blank"
                        href={project.projectLinkHosted}
                      >
                        <FontAwesomeIcon
                          icon={faArrowUpRightFromSquare}
                          color="black"
                        />
                      </a>
                    </div>
                  </div>
                  <p className="pro-project-desc-text  project-description">
                    {project.projectInfo}
                  </p>
                  <div className="pro-project-techStack project-tech-stack">
                    <h5>Tech Stack: </h5>
                    {project.techUsed.map((tech, index) => {
                      return (
                        <div className="techLogo-box">
                          <img
                            key={tech.id}
                            src={tech}
                            alt="tech logo"
                            width={30}
                            height={30}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </section>
  );
};

export default Projects;

import React from "react";
import "./skills.css";
import { SiJavascript } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { AiFillCopyrightCircle } from "react-icons/ai";
import { SiJava } from "react-icons/si";
import { SiScala } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills">
      <h5 className="skills__subtitle">What Skills I Have</h5>
      <h2 className="skills__title">My Skills</h2>

      <div className="container skills__container">
        <div className="skills__lang">
          <h3>Programming Languages</h3>
          <div className="skills__content">
            <div className="outer-cell">
              <div data-text="JavaScript" className="cell">
                <article  className="skills__details">
                  <SiJavascript
                    color="#F7A20F"
                    fontSize="1.5em"
                    className="skills-icons"
                  />
                  <h4>JavaScript</h4>
                </article>
              </div>

              <div data-text="Python" className="cell">
                <article  className="skills__details">
                  <SiPython
                    color="#4584b6"
                    fontSize="1.4em"
                    className="skills-icons"
                  />
                  <h4>Python</h4>
                </article>
              </div>

              <div  data-text="C/C++" className="cell">
                <article className="skills__details">
                  <AiFillCopyrightCircle
                    color="#276DC2"
                    fontSize="1.5em"
                    className="skills-icons"
                  />
                  <h4>C/C++</h4>
                </article>
              </div>
            </div>

            <div className="outer-cell">
              <div data-text="Java" className="cell">
                <article  className="skills__details">
                  <SiJava
                    color="orange"
                    fontSize="1.6em"
                    className="skills-icons"
                  />
                  <h4>Java</h4>
                </article>
              </div>

              <div  data-text="Scala" className="cell">
                <article className="skills__details">
                  <SiScala
                    color="red"
                    fontSize="1.5em"
                    className="skills-icons"
                  />
                  <h4>Scala</h4>
                </article>
              </div>
            </div>
          </div>
        </div>

        {/* END OF LANGUAGES */}
        <div className="skills__web">
          <h3>Web Development</h3>
          <div className="skills__content">
            <div className="outer-cell">
              <div data-text="HTML" className="cell">
                <article className="skills__details">
                  <SiHtml5
                    color="#FF5F1F"
                    fontSize="1.4em"
                    className="skills-icons"
                  />
                  <h4>HTML</h4>
                </article>
              </div>

              <div data-text="CSS" className="cell">
                <article className="skills__details">
                  <SiCss3
                    color="#1FBFFF"
                    fontSize="1.4em"
                    className="skills-icons"
                  />
                  <h4>CSS</h4>
                </article>
              </div>

              <div data-text="React.js" className="cell">
                <article className="skills__details">
                  <SiReact
                    color="#61DBFB"
                    fontSize="1.5em"
                    className="skills-icons"
                  />
                  <h4>React.js</h4>
                </article>
              </div>
            </div>

            <div className="outer-cell">
              <div data-text="Redux" className="cell">
                <article className="skills__details">
                  <SiRedux
                    color="#764abc"
                    fontSize="1.5em"
                    className="skills-icons"
                  />
                  <h4>Redux</h4>
                </article>
              </div>

              <div data-text="Bootstrap" className="cell">
                <article className="skills__details">
                  <SiBootstrap
                    color="#DF01D7"
                    fontSize="1.5em"
                    className="skills-icons"
                  />
                  <h4>Bootstrap</h4>
                </article>
              </div>

              <div data-text="Django" className="cell">
                <article className="skills__details">
                  <SiDjango
                    color="#31B404"
                    fontSize="1.5em"
                    className="skills-icons"
                  />
                  <h4>Django</h4>
                </article>
              </div>
            </div>

            <div className="outer-cell">
              <div data-text="Node.js" className="cell">
                <article className="skills__details">
                  <FaNodeJs
                    color="#31B404"
                    fontSize="1.5em"
                    className="skills-icons"
                  />
                  <h4>Node.js</h4>
                </article>
              </div>

              <div data-text="MongoDb" className="cell">
                <article className="skills__details">
                  <SiMongodb
                    color="#01DF01"
                    fontSize="1.5em"
                    className="skills-icons"
                  />
                  <h4>MongoDb</h4>
                </article>
              </div>

              <div data-text="Express.js" className="cell">
                <article className="skills__details">
                  <SiExpress
                    color="#FE2E2E"
                    fontSize="1.5em"
                    className="skills-icons"
                  />
                  <h4>Express.js</h4>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

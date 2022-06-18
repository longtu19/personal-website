import React from "react";
import "./about.css";
import Me3 from "../../assets/Me3.jpg";
import { FaAward } from "react-icons/fa";
import { CgWorkAlt } from "react-icons/cg";
import { AiOutlineProject } from "react-icons/ai";

const About = () => {
  return (
    <section id="about">
      <h5 id="title">Get To Know</h5>
      <h2 className="big__title">About Me</h2>
      <div className="row">
        <div className="col-sm-12 col-lg-4">
          <div className="custom">
            <div className="custom-image">
              <img src={Me3} alt="About Image" />
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-lg-7">
          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <CgWorkAlt className="about__icon" />
                <h5>Experience</h5>
                <small className="smaller__title">2+ Years Working</small>
              </article>

              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>Awards</h5>
                <small>3+ Achieved</small>
              </article>

              <article className="about__card">
                <AiOutlineProject className="about__icon" />
                <h5>Projects</h5>
                <small>5+ Completed</small>
              </article>
            </div>
            <p className = "intro_me">
              My first interaction with programming was with{" "}
              <span style={{ color: "#3B46DB" }}>Pascal </span>at the age of 11
              and I quickly got interested in learning the language and started
              making small projects with it. Then, during high school, I learned
              to build websites using{" "}
              <span style={{ color: "#3B46DB" }}>HTML</span>,{" "}
              <span style={{ color: "#3B46DB" }}>CSS</span>, and{" "}
              <span style={{ color: "#3B46DB" }}>JQuery</span>. On top of that,
              I learned problems solving with{" "}
              <span style={{ color: "#3B46DB" }}>Java</span>. Observing the
              incredible convenience of technology in people's daily lives and
              having a prior experience with programming and mathematics, I
              decided to pursue{" "}
              <span style={{ color: "#3B46DB" }}>Computer Science</span> and{" "}
              <span style={{ color: "#3B46DB" }}>Applied Mathematics</span> at
              the{" "}
              <span style={{ color: "#3B46DB" }}>
                University of Massachusetts Amherst
              </span>
              . After more than 2 years of learning and working on hands-on
              projects, ranging from terminal-based, object-oriented programming
              projects using{" "}
              <span style={{ color: "#3B46DB" }}>JavaScript</span> and{" "}
              <span style={{ color: "#3B46DB" }}>C</span> to networks and
              dynamic websites with{" "}
              <span style={{ color: "#3B46DB" }}>React</span>, I improved my
              ability to code with optimization and efficiency. With a desire to
              contribute to the real world, I am currently seeking for an{" "}
              <span style={{ color: "#3B46DB" }}>internship</span> as a{" "}
              <span style={{ color: "#3B46DB" }}>Software Engineer</span>{" "}
              position in an industrial company. With my skills and the ability
              to quickly learn new things, I believe I can rapidly close any
              knowledge gaps to become a valuable contributor to the company I
              will be working with!
              <br></br>
              <br></br> <span style={{ color: "#3B46DB" }}>My hobbies: </span>{" "}
              watch movies and soccer matches, go swimming, play 
              Chinese chess, and read news!{" "}
            </p>
            <a href="#contact" className="btn btn-about">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

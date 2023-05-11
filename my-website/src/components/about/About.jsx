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
            <p className = "intro_me" style={{color: '#083A7A'}}>
            Hi there, <br></br>
            <br></br>
            I'm a fan of coding and technology in general. I've had the pleasure of building a full-stack web application using JavaScript, React, HTML, and CSS, and it was an incredibly rewarding experience. On top of that, I've also worked with machine learning models. For example, I had a great experience creating and training a model to identify different numbers' images using Convolutional Neural Network (CNN)/K-nearest neighbors (KNN) algorithms.
        But that's not all - I'm always eager to learn new skills or technologies, and I'm constantly exploring new projects and ideas. <br></br>
        <br></br>When I'm not coding, I like to stay active by playing soccer, hiking, and joggling. It's a great way to keep my mind and body sharp, especially after spending hours sitting in front of a computer screen.<br></br>
<br></br>Currently, I'm seeking an internship/co-op for Fall 2023 and a new grad position for 2024 in software engineer roles. I'm excited to join a team that shares my passion for technology and can help me develop my skills even further.
If you're looking for someone who's both a tech enthusiast and a lover of the great outdoors, then look no further! I'm eager to learn, grow, and contribute in any way I can.
            
           
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

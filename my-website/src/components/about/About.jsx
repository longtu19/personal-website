import React from 'react'
import './about.css'
import Me3 from '../../assets/Me3.jpg'
import {FaAward} from 'react-icons/fa'
import {CgWorkAlt} from 'react-icons/cg'
import {AiOutlineProject} from 'react-icons/ai'

const About = () => {
    return (
        <section id = 'about' >
            
            <h5 id = "title">Get To Know</h5>
            <h2 className = "big__title">About Me</h2>

            <div className= "container about__container">
                <div className = "about__me">
                    <div className="about__me-image">
                        <img src = {Me3} alt = "About Image"/>

                    </div>

                </div>
                <div className = "about__content">
                    <div className = "about__cards">
                        <article className = "about__card">
                            <CgWorkAlt className = "about__icon"/>
                            <h5>Experience</h5>
                            <small className = "smaller__title">2+ Years Working</small>

                        </article>

                        <article className = "about__card">
                            <FaAward className = "about__icon"/>
                            <h5>Awards</h5>
                            <small>3+ Achieved</small>

                        </article>

                        <article className = "about__card">
                            <AiOutlineProject className = "about__icon"/>
                            <h5>Projects</h5>
                            <small>5+ Completed</small>

                        </article>
                    </div>

                    <p>I love coding stuff!</p>
                    <a href = "#contact" className = "btn btn-about">Let's Talk</a>

 
                </div>
            </div>
        </section>
    )
}

export default About

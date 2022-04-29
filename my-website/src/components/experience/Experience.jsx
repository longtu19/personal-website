import React from 'react'
import './experience.css'
import {SiJavascript} from 'react-icons/si'
import {SiPython} from 'react-icons/si'
import {AiFillCopyrightCircle} from 'react-icons/ai'
import {SiJava} from 'react-icons/si'
import {SiScala} from 'react-icons/si'
import {SiHtml5} from 'react-icons/si'
import {SiCss3} from 'react-icons/si'
import {SiReact} from 'react-icons/si'
import {SiRedux} from 'react-icons/si'
import {SiBootstrap} from 'react-icons/si'
import {SiDjango} from 'react-icons/si'
import {FaNodeJs} from 'react-icons/fa'
import {SiMongodb} from 'react-icons/si'
import {SiExpress} from 'react-icons/si'


const Experience = () => {
    return (
        <section id = 'experience'>
            <h5>What Skills I Have</h5>
            <h2>My Skills</h2>

            <div className = "container experience__container">
                <div className = "experience__frontend">
                    <h3>Programming Languages</h3>
                    <div className  = "experience__content">
                        <article className = "experience__details">
                            <SiJavascript color = "yellow" fontSize = "1.5em"/>
                            <div>
                                <h4>JavaScript</h4>
                                <small className = "text-light">Experienced</small>

                            </div>
                            
                        </article>

                        <article className = "experience__details">
                            <SiPython color = "#4584b6" fontSize = "1.4em"/>
                            <div>
                                <h4>Python</h4>
                                <small className = "text-light">Experienced</small>

                            </div>
                            

                        </article>

                        <article className = "experience__details">
                            <AiFillCopyrightCircle color = "#276DC2" fontSize = "1.5em"/>
                            <div>
                                <h4>C/C++</h4>
                                <small className = "text-light">Intermediate</small>

                            </div>
                            

                        </article>

                        <article className = "experience__details">
                            <SiJava color = "orange" fontSize = "1.6em"/>
                            <div>
                                <h4>Java</h4>
                                <small className = "text-light">Experienced</small>

                            </div>
                            

                        </article>

                        <article className = "experience__details">
                            <SiScala color = "red" fontSize = "1.5em"/>
                            <div>
                                <h4>Scala</h4>
                                <small className = "text-light">Basic</small>


                            </div>
                            
                        </article>

                       
                    </div>
                </div>

                {/* END OF LANGUAGES */}
                <div className = "experience__backend">
                    <h3>Web Development</h3>
                    <div className  = "experience__content">
                        <article className = "experience__details">
                            <SiHtml5 color = "#FF5F1F" fontSize = "1.4em"/>
                            <div>
                                <h4>HTML</h4>
                                <small className = "text-light">Experienced</small>

                            </div>
                            

                        </article>

                        <article className = "experience__details">
                            <SiCss3 color = "#1FBFFF" fontSize = "1.4em"/>
                            <div>
                                <h4>CSS</h4>
                                <small className = "text-light">Experienced</small>

                            </div>
                            

                        </article>

                        <article className = "experience__details">
                            <SiReact color = "#61DBFB" fontSize = "1.5em"/>
                            <div>
                                <h4>React.js</h4>
                                <small className = "text-light">Experienced</small>

                            </div>
                            

                        </article>

                        <article className = "experience__details">
                            <SiRedux color = "#764abc" fontSize = "1.5em"/>
                            <div>
                                <h4>Redux</h4>
                                <small className = "text-light">Experienced</small>


                            </div>
                            
                        </article>

                        <article className = "experience__details">
                            <SiBootstrap color = "#DF01D7" fontSize = "1.5em"/>
                            <div>
                                <h4>Bootstrap</h4>
                                <small className = "text-light">Basic</small>

                            </div>
                            

                        </article>

                        <article className = "experience__details">
                            <SiDjango color = "#31B404" fontSize = "1.5em"/>
                            <div>
                                <h4>Django</h4>
                                <small className = "text-light">Basic</small>


                            </div>
                            
                        </article>

                        <article className = "experience__details">
                            <FaNodeJs color = "#31B404" fontSize = "1.5em"/>
                            <div>
                                <h4>Node.js</h4>
                                <small className = "text-light">Learning</small>


                            </div>
                            
                        </article>

                        <article className = "experience__details">
                            <SiMongodb color = "#01DF01" fontSize = "1.5em"/>
                            <div>
                                <h4>MongoDb</h4>
                                <small className = "text-light">Learning</small>


                            </div>
                            
                        </article>

                        <article className = "experience__details">
                            <SiExpress color = "#FE2E2E" fontSize = "1.5em"/>
                            <div>
                                <h4>Express.js</h4>
                                <small className = "text-light">Learning</small>


                            </div>
                            
                        </article>







                       
                    </div>

                </div>

            </div>
        </section>

    )
}

export default Experience

import React, {useState } from 'react'
import './experience.css'
import epifinder from "../../assets/epi.png";
import xcel from "../../assets/xcel.jpg";
import catsboston from "../../assets/catsboston.jpg";
import m3 from "../../assets/m3.jpg";


const Experience = ({}) => {

   
    return (
        <section id = 'experience'>
            
            <h5 id = "exp__subtitle">Where I worked</h5>
            <h2 id = "exp__title">My Experience</h2>

            <div className = "slider">
                <span style = {{"--i": 1}}><img src = {epifinder} alt = ""/></span>
                <span style = {{"--i": 2}}><img src = {catsboston} alt = ""/></span>
                <span style = {{"--i": 3}}><img src = {m3} alt = ""/></span>
                <span style = {{"--i": 4}}><img src = {xcel} alt = ""/></span>
            </div>


            {/* <div className = "timeline">
                <div className = "timeline__content timeline__content--top">
                    <div className = "timeline__date timeline__date--right">August 30, 2020</div>
                </div>

                <div className = "timeline__middle">
                    <div className = "timeline__point"></div>
                </div>

                <div className = "timeline__content timeline__content--bg">
                    <h2 className = "timeline__title">EpiFinder (Incoming)</h2>
                    <p className = "timeline__p">
                        Implement and upgrade automation for various software, websites, and apps for medical purposes
                    </p>

                </div>


                <div className = "timeline__content timeline__content--bg">
                    <h2 className = "timeline__title">EpiFinder (Incoming)</h2>
                    <p className = "timeline__p">
                        Implement and upgrade automation for various software, websites, and apps for medical purposes
                    </p>

                </div>

                <div className = "timeline__middle">
                    <div className = "timeline__point"></div>
                   
                </div>

                <div className = "timeline__content">
                    <div className = "timeline__date">August 30, 2020</div>
                </div>

                <div className = "timeline__content">
                    <div className = "timeline__date timeline__date--right">August 30, 2020</div>
                </div>

                <div className = "timeline__middle">
                    <div className = "timeline__point"></div>
                    
                </div>
               
                <div className = "timeline__content timeline__content--bottom timeline__content--bg">
                    <h2 className = "timeline__title">EpiFinder (Incoming)</h2>
                    <p className = "timeline__p">
                        Implement and upgrade automation for various software, websites, and apps for medical purposes
                    </p>

                </div>
                <div className = "timeline__content timeline__content--bottom timeline__content--bg">
                    <h2 className = "timeline__title">EpiFinder (Incoming)</h2>
                    <p className = "timeline__p">
                        Implement and upgrade automation for various software, websites, and apps for medical purposes
                    </p>

                </div>

                <div className = "timeline__middle">
                    <div className = "timeline__point"></div>
                    <div className = "timeline__point timeline__point--bottom"></div>
                   
                </div>

                <div className = "timeline__content timeline__content--bottom">
                    <div className = "timeline__date">August 30, 2020</div>
                </div>

            </div> */}

           


        </section>

    )
}

export default Experience

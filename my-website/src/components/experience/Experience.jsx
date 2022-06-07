import React, { useEffect, useRef, useState } from "react";
import "./experience.css";
import "./listStyle.css";
import epifinder from "../../assets/epi.png";
import xcel from "../../assets/xcel.jpg";
import catsboston from "../../assets/catsboston.jpg";
import m3 from "../../assets/m3.jpg";
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import {xCel} from './jobs'
const Experience = ({
  EpiMouseOver,
  EpiMouseOut,

  CatsMouseOver,
  CatsMouseOut,

  XcelMouseOver,
  XcelMouseOut,

  M3MouseOver,
  M3MouseOut,
}) => {
  return (
    <div className="slider">
      <span
        style={{ "--i": 1 }}
        onMouseOver={EpiMouseOver}
        onMouseOut={EpiMouseOut}
      >
        <img src={epifinder} alt="" />
      </span>

      <span
        style={{ "--i": 2 }}
        onMouseOver={CatsMouseOver}
        onMouseOut={CatsMouseOut}
      >
        <img src={catsboston} alt="" />
      </span>
      <span
        style={{ "--i": 3 }}
        onMouseOver={M3MouseOver}
        onMouseOut={M3MouseOut}
      >
        <img src={m3} alt="" />
      </span>
      <span
        style={{ "--i": 4 }}
        onMouseOver={XcelMouseOver}
        onMouseOut={XcelMouseOut}
      >
        <img src={xcel} alt="" />
      </span>
    </div>
  );
};

const HoverEpi = () => {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <h5 className="job__title">Software Engineering Intern</h5>
      <ul>
        <li>
          Implement and upgrade automation for various software, websites, and
          apps for medical purposes
        </li>
        <li>
          Update and test clinical screening tool to map symptoms with
          evidence-based algorithm to diagnose epilepsy with high accuracy
        </li>
        <li>
          Enhance self-management tool to help patients document their seizures,
          medications, daily activities for doctoral interpretation
        </li>
        <li>
          Developed and automated flickering lights by Arduino to serve in the
          Fashion Show 2018 at CATS Boston
        </li>
        <li>
          Web-enable for individual customers and business’ demands such as
          digital marketing, advertisement, software maintenance, etc.
        </li>
      </ul>
    </div>
  );
};
const HoverCats = () => {
  return (
    <div className="d-flex align-items-center">
      <h5 className="job__title">Software Engineering Intern</h5>
      <ul>
        <li>
          Implemented a robot using Arduino, open-source software based on C++,
          for transporting objects to increase staff efficiency
        </li>
        <li>
          Increased the range of control of the robot up to 100 feet by
          connecting the PlayStation4 controller to its movement system
        </li>
        <li>
          Redeveloped and optimized the robot's movement speed from 7mph to
          18mph to present at Tech Fair 2019 at CATS Academy
        </li>
        <li>
          Developed and automated flickering lights by Arduino to serve in the
          Fashion Show 2018 at CATS Boston
        </li>
        <li>
          Utilized a resistor enabling blink rate of LED for the lights to
          reduce manual work by 40% operation time
        </li>
      </ul>
    </div>
  );
};
const HoverM3 = () => {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <h5 className="job__title">Software Engineering Intern</h5>
      <ul>
        <li>
          Led a team of 5 high school seniors to create methodical mathematical
          models to solve given world problems
        </li>
        <li>
          Built a model using Java, mathematics, and statistic to predict what
          percentage of semi-truck will be electric in the next few years{" "}
        </li>
        <li>
          Enabled the model to determine the needed number of locations of
          charging stations along major U.S. trucking routes
        </li>
        <li>
          Upgraded the model to prioritize which routes to develop first with
          electric charging infrastructure
        </li>
        <li>
          Improved leadership, analytical thinking, and teamwork skills by
          competing in the challenge
        </li>
      </ul>
    </div>
  );
};
const HoverXcel = () => {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <h5 className="job__title">Maths Tutor</h5>
      <section className = "list">
        <div className="list-item">
        <div className = "item-body" >
          {xCel.map((e, idx) => (
            <li style = {{"--order": idx}}>{e.task}</li>
          ))}
        </div>
        </div>

      </section>
     
      



      
      
    </div>

    
  );
};

let trackOdometer = 0;
function Number() {
  const [odometerVal, setOdometerVal] = useState(trackOdometer);

  const ref = useRef();

  useEffect(() => {
    if (trackOdometer == 0) {
      window.addEventListener("scroll", scrollHandler);

      return () => window.removeEventListener("scroll", scrollHandler);
    }
  }, [odometerVal]);

  const scrollHandler = () => {
    if (window.pageYOffset + window.innerHeight > ref.current.offsetTop) {
      setOdometerVal(17280);
      trackOdometer = 17280;
    }
  };

  return (
    <div className="row" id="metric">
      <div className="col-4" ref={ref}>
        <Odometer value={odometerVal} format="d" duration={1000} />
      </div>
      <div className="col-1">+</div>

      <div className="col-12">HOURS WORKING</div>
    </div>
  );
}

const MainExp = () => {
  const [isEpiHovering, setIsEpiHovering] = useState(false);
  const EpiMouseOver = () => {
    setIsEpiHovering(true);
  };

  const EpiMouseOut = () => {
    setIsEpiHovering(false);
  };

  const [isCatsHovering, setIsCatsHovering] = useState(false);
  const CatsMouseOver = () => {
    setIsCatsHovering(true);
  };

  const CatsMouseOut = () => {
    setIsCatsHovering(false);
  };

  const [isXcelHovering, setIsXcelHovering] = useState(false);
  const XcelMouseOver = () => {
    setIsXcelHovering(true);
  };

  const XcelMouseOut = () => {
    setIsXcelHovering(false);
  };

  const [isM3Hovering, setIsM3Hovering] = useState(false);
  const M3MouseOver = () => {
    setIsM3Hovering(true);
  };

  const M3MouseOut = () => {
    setIsM3Hovering(false);
  };

  return (
    <section id="experience">
      <h5 id="exp__subtitle">Where I worked</h5>
      <h2 id="exp__title">My Experience</h2>
      <div className="row mt-3">
        <div className="col-5">
          <Experience
            EpiMouseOver={EpiMouseOver}
            EpiMouseOut={EpiMouseOut}
            isEpiHovering={isEpiHovering}
            CatsMouseOver={CatsMouseOver}
            CatsMouseOut={CatsMouseOut}
            isCatsHovering={isCatsHovering}
            XcelMouseOver={XcelMouseOver}
            XcelMouseOut={XcelMouseOut}
            isXcelHovering={isXcelHovering}
            M3MouseOver={M3MouseOver}
            M3MouseOut={M3MouseOut}
            isM3Hovering={isM3Hovering}
          />
        </div>

        <div className="col-7">
          {!isCatsHovering &&
            !isEpiHovering &&
            !isM3Hovering &&
            !isXcelHovering && <Number />}
          {isEpiHovering && <HoverEpi />}
          {isCatsHovering && <HoverCats />}
          {isM3Hovering && <HoverM3 />}
          {isXcelHovering && <HoverXcel />}
        </div>
      </div>
    </section>
  );
};

export default MainExp;

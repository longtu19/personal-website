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
import {xCel, cats, epi, m3c} from './jobs'
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
    <div className="xcel d-flex">
    <div className = "job__title col-3">
      <h5>Incoming Software Engineering Intern</h5>
      <small className = "date">06/02/2019 - 08/24/2019</small>

    </div>
   
    <section className = "list col-3">
      <div className="list-item">
        <div className = "item-body" >
          {epi.map((e, idx) => (
            <li style = {{"--order": idx}}>{e.task}</li>
          ))}
        </div>
      </div>

    </section>
   
  </div>
  );
};
const HoverCats = () => {
  return (
    <div className="cats d-flex">
      <div className = "job__title col-3">
        <h5>Robotic Developer</h5>
        <small className = "date">06/02/2019 - 08/24/2019</small>

      </div>
    
      <section className = "list col-3">
        <div className="list-item">
          <div className = "item-body" >
            {cats.map((e, idx) => (
              <li style = {{"--order": idx}}>{e.task}</li>
            ))}
          </div>
        </div>

      </section>
    
  </div>
    
  );
};
const HoverM3 = () => {
  return (
    <div className="m3c d-flex">
    <div className = "job__title col-3">
      <h5>Team Leader</h5>
      <small className = "date">06/02/2019 - 08/24/2019</small>

    </div>
   
    <section className = "list col-3">
      <div className="list-item">
        <div className = "item-body" >
          {m3c.map((e, idx) => (
            <li style = {{"--order": idx}}>{e.task}</li>
          ))}
        </div>
      </div>

    </section>
   
  </div>

  );
};
const HoverXcel = () => {
  return (
    <div className="xcel d-flex">
      <div className = "job__title col-3">
        <h5>Maths Tutor</h5>
        <small className = "date">06/02/2019 - 08/24/2019</small>

      </div>
     
      <section className = "list col-3">
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
      <div className="odo col-4" ref={ref}>
        <Odometer value={odometerVal} format="d" duration={1000} />
      </div>
      <div className="col-1">+</div>

      <div className="hour col-12 mt-2">HOURS WORKING</div>
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

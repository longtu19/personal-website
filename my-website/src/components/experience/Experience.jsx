import React, { useEffect, useRef, useState } from "react";
import "./experience.css";
import "./listStyle.css";
import epifinder from "../../assets/epi.png";
import xcel from "../../assets/xcel.jpg";
import catsboston from "../../assets/catsboston.jpg";
import m3 from "../../assets/m3.jpg";
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";
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
    <div className="container epi">
    <div className = "job__title ">
      <h5 className = "epi-title">Software Engineering Intern</h5>
      <small className = "date">06/02/2022 - 08/24/2022</small>

    </div>
   
    <section className = "list">
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
    <div className="container cats">
      <div className = "job__title">
        <h5>Robotic Developer</h5>
        <small className = "date">02/01/2018 - 11/24/2019</small>

      </div>
    
      <section className = "list">
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
    <div className="container m3c">
    <div className = "job__title ">
      <h5>Team Leader</h5>
      <small className = "date">02/12/2019 - 02/20/2020</small>

    </div>
   
    <section className = "list">
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
    <div className="container xcel">
      <div className = "job__title">
        <h5>Maths Tutor</h5>
        <small className = "date">06/02/2019 - 08/24/2019</small>

      </div>
     
      <section className = "list">
        <div className="list-item">
          <div className = "item-body" >
            {xCel.map((e, idx) => (
              <li key = {idx} style = {{"--order": idx}}>{e.task}</li>
            ))}
          </div>
        </div>

      </section>
     
    </div>

    
  );
};

//col-sm-12 col-lg-3
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
    <div className="container num">
      <div className="odo" ref={ref}>
        <div className = "sub_odo">
          <div>
          <Odometer value={odometerVal} format="d" duration={1700} />

          </div>
          
          <div>
          <span className = "plus">+</span>

          </div>
          

        </div>
        
      </div>
      

      <div className="hour">HOURS WORKING</div>
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
      <div className="container exp-container mt-3">
        <div className="left">
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

        <div className="right">
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

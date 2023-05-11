import React, { useEffect, useRef, useState } from "react";
import "./experience.css";
import "./listStyle.css";
import umassSign from "../../assets/umassSign.jpg";
import hack_pic from "../../assets/hackUmass.png";
import catsboston from "../../assets/catsboston.jpg";
import dct_pic from "../../assets/DCT.png"
import dell_logo from "../../assets/Dell.png"
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";
import {hackathon, dell, dct, cats} from './jobs'
const Experience = ({
  DellMouseOver,
  DellMouseOut,

  CatsMouseOver,
  CatsMouseOut,

  HackMouseOver,
  HackMouseOut,

  dctMouseOver,
  dctMouseOut,
}) => {
  return (
    <div className="slider">
      <span
        style={{ "--i": 1 }}
        onMouseOver={DellMouseOver}
        onMouseOut={DellMouseOut}
      >
        <img src={dell_logo} alt="" />
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
        onMouseOver={dctMouseOver}
        onMouseOut={dctMouseOut}
      >
        <img src={dct_pic} alt="" />
      </span>
      <span
        style={{ "--i": 4 }}
        onMouseOver={HackMouseOver}
        onMouseOut={HackMouseOut}
      >
        <img src={hack_pic} alt="" />
      </span>
    </div>
  );
};

const HoverDell = () => {
  return (
    <div className="container epi">
    <div className = "job__title ">
      <h5 className = "epi-title">Incoming Software Engineer Intern</h5>
      <small className = "date">05/30/2023 - 08/18/2023</small>

    </div>
   
    <section className = "list">
      <div className="list-item">
        <div className = "item-body" >
          {dell.map((e, idx) => (
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
        <h5>Software-Robotic Developer</h5>
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
const HoverDct = () => {
  return (
    <div className="container m3c">
    <div className = "job__title ">
      <h5>Software Engineer Intern</h5>
      <small className = "date">02/12/2023 - Present</small>

    </div>
   
    <section className = "list">
      <div className="list-item">
        <div className = "item-body" >
          {dct.map((e, idx) => (
            <li style = {{"--order": idx}}>{e.task}</li>
          ))}
        </div>
      </div>

    </section>
   
  </div>

  );
};
const HoverHackathon= () => {
  return (
    <div className="container xcel">
      <div className = "job__title">
        <h5>Team Lead</h5>
        <small className = "date">11/17/2023 - 11/19/2023</small>

      </div>
     
      <section className = "list">
        <div className="list-item">
          <div className = "item-body" >
            {hackathon.map((e, idx) => (
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
  const [isDellHovering, setIsDellHovering] = useState(false);
  const DellMouseOver = () => {
    setIsDellHovering(true);
  };

  const DellMouseOut = () => {
    setIsDellHovering(false);
  };

  const [isCatsHovering, setIsCatsHovering] = useState(false);
  const CatsMouseOver = () => {
    setIsCatsHovering(true);
  };

  const CatsMouseOut = () => {
    setIsCatsHovering(false);
  };

  const [isHackHovering, setIsHackHovering] = useState(false);
  const HackMouseOver = () => {
    setIsHackHovering(true);
  };

  const HackMouseOut = () => {
    setIsHackHovering(false);
  };

  const [isDctHovering, setIsDctHovering] = useState(false);
  const dctMouseOver = () => {
    setIsDctHovering(true);
  };

  const dctMouseOut = () => {
    setIsDctHovering(false);
  };

  return (
    <section id="experience">
      <h5 id="exp__subtitle">Where I worked</h5>
      <h2 id="exp__title">My Experience</h2>
      <div className="container exp-container mt-3">
        <div className="left">
          <Experience
            DellMouseOver={DellMouseOver}
            DellMouseOut={DellMouseOut}
            isDellHovering={isDellHovering}
            CatsMouseOver={CatsMouseOver}
            CatsMouseOut={CatsMouseOut}
            isCatsHovering={isCatsHovering}
            HackMouseOver={HackMouseOver}
            HackMouseOut={HackMouseOut}
            isHackHovering={isHackHovering}
            dctMouseOver={dctMouseOver}
            dctMouseOut={dctMouseOut}
            isDctHovering={isDctHovering}
          />
        </div>

        <div className="right">
          {!isCatsHovering &&
            !isDellHovering &&
            !isDctHovering &&
            !isHackHovering && <Number />}
          {isDellHovering && <HoverDell />}
          {isCatsHovering && <HoverCats />}
          {isDctHovering && <HoverDct />}
          {isHackHovering && <HoverHackathon/>}
        </div>
      </div>
    </section>
  );
};

export default MainExp;

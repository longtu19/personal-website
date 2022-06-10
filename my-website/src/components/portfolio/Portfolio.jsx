import React from "react";
import "./portfolio.css";
import machine from "../../assets/Machine.jpg";
import room from "../../assets/room.jpg";
import code from "../../assets/code.jpg";
import covid19 from "../../assets/covid19.jpg";
import bot from "../../assets/statBot.jpg";
import ristorante from "../../assets/ristorante.jpg";

const data = [
  {
    id: 1,
    image: ristorante,
    title: "Ristorante Website",
    github: "https://github.com/longtu19/Ristorante-Con-Fusion",
  },
  {
    id: 2,
    image: room,
    title: "Detective Game",
    github: "#contact",
  },
  {
    id: 3,
    image: machine,
    title: "Finite State Machine",
    github: "#contact",
  },
  {
    id: 4,
    image: code,
    title: "Code Interpreter",
    github: "#contact",
  },
  {
    id: 5,
    image: covid19,
    title: "Covid-19 Appoinment Synchronization",
    github: "#contact",
  },
  {
    id: 6,
    image: bot,
    title: "Statistic Bot",
    github: "#contact",
  }
];

const porfolio = () => {
  return (
    <section id="portfolio">
      <h5 id = "project__subtitle">What Projects I Have Done</h5>
      <h2 id = "project__title">My Projects</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github }) => {
          return (
            <article key = {id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href = {github} className="btn btn-project">
                  More Information
                </a>
                
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default porfolio;

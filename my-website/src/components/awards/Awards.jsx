import React from "react";
import "./awards.css";
import ICPC from "../../assets/icpc.png";
import UM1 from "../../assets/umass1.jpg";
import UM2 from "../../assets/umass2.jpg";
import UM3 from "../../assets/umass3.jpeg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    pic: UM2,
    title: "Commonwealth Honors College",
    desc: " Admitted to the Commonwealth Honors College (CHC) as a freshman with 15% accpeptance rate for first year students. CHC offers an Honors Curriculum that incorporates neral education and advance scholarship for undergraduates pursuing any university's majors, culmnating in the completion of Honor Thesis",
  },
  {
    pic: ICPC,
    title: "ICPC Award",
    desc: " Advanced to a team of 3 students to represent the University of Massachusetts Amherst to compete in the International Collegiate Programming Contest (ICPC) Northeast North America Regional 2021 and placed 6th out of 120 teams during the 8-hour competitive programming",
  },

  {
    pic: UM1,
    title: "Chancellor's Award",
    desc: "Awarded by University of Massachusetts Amherst to international students with outstanding achievement in coursework",
  },
  {
    pic: UM3,
    title: "Dean List",
    desc: "Awarded by University of Massachusetts Amherst to students with academic excellence performance in all semesters",
  },
];

const Test = () => {
  return (
    <section id="awards">
      <h5 className = "award__subtitle">What I Achieved</h5>
      <h2 className = "award__title">My Awards</h2>

      <Swiper
        className="container awards__container"
        // install Swiper modules
        loop = 'true'
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ pic, title, desc }, index) => {
          return (
            <SwiperSlide key={index} className="award">
              <div className="award__info">
                <img className = "awd_pic" src={pic} />

                <div className="title">{title}</div>
              </div>
              <div className="details">
                <p>{desc}</p>
              </div>
            </SwiperSlide>
          );
        })}

       
      </Swiper>
    </section>
  );
};

export default Test;

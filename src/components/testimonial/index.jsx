import React, { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import "./style.scss";

const Testimonial = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      title: "Marshell A.",
      profile: "Lead Developer",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam feugiat nibh ac faucibus feugiat. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc id risus vel eros vulputate tristique.",
    },
    {
      title: "Marshell B.",
      profile: "Lead Developer",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam feugiat nibh ac faucibus feugiat. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc id risus vel eros vulputate tristique.",
    },
    {
      title: "Marshell C.",
      profile: "Lead Developer",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam feugiat nibh ac faucibus feugiat. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc id risus vel eros vulputate tristique.",
    },
  ];

  const nextSlide = () => {
    setActiveSlide((activeSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide((activeSlide + slides.length - 1) % slides.length);
  };

  return (
    <div className="testimonial-section">
      <div className="testimonial-header">
        <h5>Testimonials</h5>
        <h2>What partners says about us</h2>
        <p>
          We Create dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
          eirmod…
        </p>
      </div>
      <div className="testimonial-body">
        <div className="left">
          <img src="./images/andrew-power.png" alt="Andrew Power" />
        </div>
        <div className="right">
          <div className="testimonial-slider">
            <div className="slides">
              <h2 className="title">{slides[activeSlide].title}</h2>
              <p className="profile">{slides[activeSlide].profile}</p>
              <p className="review">{slides[activeSlide].review}</p>
            </div>
            <div className="slides">
              <h2 className="title">
                {slides[(activeSlide + 1) % slides.length].title}
              </h2>
              <p className="profile">
                {slides[(activeSlide + 1) % slides.length].profile}
              </p>
              <p className="review">
                {slides[(activeSlide + 1) % slides.length].review}
              </p>
            </div>
            <div className="slides">
              <h2 className="title">
                {slides[(activeSlide + 2) % slides.length].title}
              </h2>
              <p className="profile">
                {slides[(activeSlide + 2) % slides.length].profile}
              </p>
              <p className="review">
                {slides[(activeSlide + 2) % slides.length].review}
              </p>
            </div>
          </div>

          <div className="testimonial-toggle">
            <span className="prev" onClick={prevSlide}>
              <BsArrowLeft />
            </span>
            <span className="next" onClick={nextSlide}>
              <BsArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

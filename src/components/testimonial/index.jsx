import React, { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import "./style.scss";

const Testimonial = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      title: "John Smith",
      profile: "Software Developer",
      review:
        "Referrizer has been a game-changer for my business. With their email and SMS campaigns, I can easily stay in touch with my customers and keep them coming back. And the automated review requests have helped us get more positive reviews than ever before!",
    },
    {
      title: "Sarah Lee",
      profile: "Network Administrator",
      review:
        "We love Referrizer's all-in-one marketing platform. It has everything we need to manage our campaigns, track our performance, and engage with our customers. Plus, the customer support is top-notch!",
    },
    {
      title: "Tom Johnson",
      profile: "Cybersecurity Analyst",
      review:
        "Since we started using Referrizer, our business has seen a significant increase in revenue. The email and SMS campaigns are easy to use and highly effective, and the online reputation management tools have helped us maintain a positive online presence.",
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
        Our Collaborators Share Their Experience with Referrizer
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

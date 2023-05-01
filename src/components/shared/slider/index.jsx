import React, { useState } from "react";
import { FaJava, FaCode, FaAngular } from "react-icons/fa";
import { DiReact, DiJavascript1, DiNodejs } from "react-icons/di";
import { SiTypescript, SiMongodb, SiMysql, SiDocker } from "react-icons/si";
import {
  FcNext,
  FcPrevious
} from "react-icons/fc";
import "./style.scss";

const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    <FaJava />,
    <FaCode />,
    <FaAngular />,
    <DiJavascript1 />,
    <DiNodejs />,
    <DiReact />,
    <SiTypescript />,
    <SiMongodb />,
    <SiMysql />,
    <SiDocker />,
  ];

  const nextSlide = () => {
    setActiveSlide((activeSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide((activeSlide + slides.length - 1) % slides.length);
  };

  return (
    <div className="carousel-container">
      <div className="slides-container">
        <div className="slides slide-1">
          {slides[(activeSlide + 0) % slides.length]}
        </div>
        <div className="slides slide-2">
          {slides[(activeSlide + 1) % slides.length]}
        </div>
        <div className="slides slide-3">
          {slides[(activeSlide + 2) % slides.length]}
        </div>
        <div className="slides slide-4">
          {slides[(activeSlide + 3) % slides.length]}
        </div>
        <div className="slides slide-5">
          {slides[(activeSlide + 4) % slides.length]}
        </div>
        <div className="slides slide-6">
          {slides[(activeSlide + 5) % slides.length]}
        </div>
        <div className="slides slide-7">
          {slides[(activeSlide + 6) % slides.length]}
        </div>
        <div className="slides slide-8">
          {slides[(activeSlide + 7) % slides.length]}
        </div>
        <div className="slides slide-9">
          {slides[(activeSlide + 8) % slides.length]}
        </div>
        <div className="slides slide-10">
          {slides[(activeSlide + 9) % slides.length]}
        </div>

        <div className="carousel-button">
          <div className="prev" onClick={prevSlide}>
            <FcPrevious />
          </div>
          <div className="next" onClick={nextSlide}>
            <FcNext />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

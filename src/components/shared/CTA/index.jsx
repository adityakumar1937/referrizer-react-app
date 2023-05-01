import React from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { IoDocumentTextOutline } from "react-icons/io5";
import "./style.scss";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

export const CtaPrimary = ({ text }) => {
  return (
    <div className="call-to-action primary">
      <span className="text">{text}</span>
    </div>
  );
};

export const CtaSecondary = ({ text }) => {
  return (
    <div className="call-to-action secondary">
      <span className="text">{text}</span>
    </div>
  );
};

export const CtaHeroOne = ({ text }) => {
  return (
    <div className="call-to-action hero-cta-one">
      <span className="text">{text}</span>
    </div>
  );
};

export const CtaHeroTwo = ({ text }) => {
  return (
    <div className="hero-cta-two">
      <span className="play-icon">
        <BsFillPlayCircleFill />
      </span>
      <span className="text">{text}</span>
    </div>
  );
};

export const DevDocCTA = ({ text }) => {
  return (
    <div className="call-to-action dev-doc-btn">
      <span className="doc-icon">
        <IoDocumentTextOutline />
      </span>
      <span className="text">{text}</span>
    </div>
  );
};

export const Previous = () => {
  return (
    <div className="prev">
      <AiOutlineArrowLeft />
    </div>
  );
};

export const Next = () => {
  return (
    <div className="next">
      <AiOutlineArrowRight />
    </div>
  );
};

import React from "react";
import {
  BsLinkedin,
  BsTwitter,
  BsInstagram,
  BsFacebook,
  BsYoutube,
} from "react-icons/bs";
import "./style.scss";
const Copywrite = () => {
  return (
    <div className="copywrite-section">
      <div className="logo">
        <img src="./images/logo-light.png" alt="Dark Logo" />
      </div>
      <div className="social-icons">
        <BsLinkedin/>
        <BsTwitter/>
        <BsInstagram/>
        <BsFacebook/>
        <BsYoutube/>
      </div>
      <div className="links">
        <a href="/">Login</a>
        <a href="/">Sign up for free</a>
      </div>
      <div className="reserve">
        <p>&#169; 2021-2023 Referrizer Inc.</p>
      </div>
    </div>
  );
};

export default Copywrite;

import React from "react";
import { BsTrophy } from "react-icons/bs";
import { CtaHeroOne, CtaHeroTwo } from "../shared/CTA";
import Navigation from "../navigation-bar";

import "./style.scss";

const Intro = () => {
  return (
    <>
      <Navigation />
      <div className="Intro-section">
        <div className="hero">
          <h1>
            Become a Referrizer <br /> API Integration Partner
          </h1>
          <p>Join our API Integration Partner Program and Grow Your Business.</p>
          <div className="button-group">
            <CtaHeroOne text="Get Started" />
            <CtaHeroTwo text="Play Video" />
          </div>
        </div>

        <div className="response-card">
          <div>
            <h4>
              Response <br />
              <span>Stats</span>
            </h4>
          </div>
        </div>

        <div className="awards-card">
          <div>
            <span>
              <BsTrophy />
            </span>
            <h4>
              <span>Award </span>winning
            </h4>
          </div>
        </div>

        <div className="leads-card">
          <div>
            <h1>
              65<span>%</span>
            </h1>
            <p>Get 65% More leads</p>
          </div>
        </div>

        <div className="free-account-card">
          <div>
            <h2>
              Free <span>Account</span>
            </h2>
            <p>Create Free Account for developers</p>
          </div>
        </div>
        <img className="hero-image" src="./images/editor-1.png" alt="" />
      </div>
    </>
  );
};

export default Intro;

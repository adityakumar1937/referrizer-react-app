import React from "react";
import "./style.scss";
import { CtaPrimary } from "../shared/CTA";

const CommunityBanner = () => {
  return (
    <div className="banner-section">
      <div className="banner-body">
        <img className="image-frame" src="./images/frame.png" alt="Frame" />{" "}
        <div className="content">
          <h2>FREE Account for developer, No cost to join</h2>
          <p>Lorem ipsum dolor sit amet, ea vel bonorum facilisis.</p>
          <div className="btn">
            <div>
              <CtaPrimary text="Join the Community" />
            </div>
          </div>
        </div>
        <div className="ellipse-1"></div>
        <div className="ellipse-2"></div>
        <div className="ellipse-3"></div>
      </div>
    </div>
  );
};

export default CommunityBanner;

import React, { useState } from "react";
import "./style.scss";

const Resources = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <div className="resources-section">
    <div className="header">
          <h5>Tools & Resources</h5>
          <h2>Tools & Other Resouces</h2>
          <p>Power Up Your Marketing Game with These Tools and Resources</p>
        </div>
        <div className="resources-body">
      <div className="left">
        <div className="tools">
          <div className="tool">
            <h4 onClick={() => handleToggle(0)}>Visual Builder</h4>
            <div className={activeIndex === 0 ? "active" : ""}>
              <p>
              A user-friendly drag-and-drop interface for creating customized marketing campaigns and landing pages.
              </p>
              <a href="/">View More</a>
            </div>
          </div>
          <div className="tool">
            <h4 onClick={() => handleToggle(1)}>Videos Library</h4>
            <div className={activeIndex === 1 ? "active" : ""}>
              <p>
              An extensive collection of educational videos and tutorials to help users learn how to use Referrizer and optimize their marketing strategy.
              </p>
              <a href="/">View More</a>
            </div>
          </div>

          <div className="tool">
            <h4 onClick={() => handleToggle(2)}>Quick Support</h4>
            <div className={activeIndex === 2 ? "active" : ""}>
              <p>
              Referrizer's dedicated support team is available to provide assistance and resolve issues quickly and efficiently.
              </p>
              <a href="/">View More</a>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <img src="./images/resouces.png" alt="Resources" />
      </div>
    </div>
    </div>
  );
};

export default Resources;

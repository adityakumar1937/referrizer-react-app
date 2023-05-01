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
          <h5>Tools & Resouces</h5>
          <h2>Tools & Other Resouces</h2>
          <p>Consectetur adipiscing elit, consectetur adipiscing amet.</p>
        </div>
        <div className="resources-body">
      <div className="left">
        <div className="tools">
          <div className="tool">
            <h4 onClick={() => handleToggle(0)}>Visual Builder</h4>
            <div className={activeIndex === 0 ? "active" : ""}>
              <p>
                Lorem ipsum dolor sit amet consectetur. ipsum dolor sit amet
                consectetur. Video library of what our customer says, Tutorials,
                App Integration and more
              </p>
              <a href="/">View More</a>
            </div>
          </div>
          <div className="tool">
            <h4 onClick={() => handleToggle(1)}>Videos Library</h4>
            <div className={activeIndex === 1 ? "active" : ""}>
              <p>
                Lorem ipsum dolor sit amet consectetur. ipsum dolor sit amet
                consectetur. Video library of what our customer says, Tutorials,
                App Integration and more
              </p>
              <a href="/">View More</a>
            </div>
          </div>

          <div className="tool">
            <h4 onClick={() => handleToggle(2)}>Quick Support</h4>
            <div className={activeIndex === 2 ? "active" : ""}>
              <p>
                Lorem ipsum dolor sit amet consectetur. ipsum dolor sit amet
                consectetur. Video library of what our customer says, Tutorials,
                App Integration and more
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

import React from "react";
import Slider from "../shared/slider";
import { DevDocCTA } from "../shared/CTA";
import "./style.scss"

const Devdocs = () => {
  return (
    <div className="dev-section">
      <div className="dev-header">
        <h5>Dev Docs</h5>
        <h2>Dev Documentaion <br /> Integrate your application in minutes</h2>
        <p>
          Streamline Integration with Comprehensive Dev Documentation
        </p>
        <img src="./images/editor-2.png" alt="Editor" />
        <Slider/>
      </div>
      <div className="btn">
      <div className="doc-button">
        <DevDocCTA text="View Dev Docs"/>
      </div>
    </div>
    </div>
  );
};

export default Devdocs;

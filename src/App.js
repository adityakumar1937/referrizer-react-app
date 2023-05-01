import React from "react";
import Intro from "./components/intro";
import Partner from "./components/partner";
import Resources from "./components/tool-resources";
import Devdocs from "./components/dev-docs";
import FAQ from "./components/faq";
import CommunityBanner from "./components/community-banner";
import Success from "./components/success-stories";
import Footer from "./components/Footer";

import "./app.scss";
import Testimonial from "./components/testimonial";

const App = () => {
  return (
    <div>
      <Intro />
      <Partner />
      <Resources />
      <Devdocs />
      <Testimonial />
      <FAQ />
      <CommunityBanner/>
      <Success/>
      <Footer/>
    </div>
  );
};

export default App;

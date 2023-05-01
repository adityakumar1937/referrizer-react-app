import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import {CgMenuRight, CgSearch} from "react-icons/cg"
import { CtaPrimary, CtaSecondary } from "../shared/CTA";
import "./style.scss";


const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavOpen = () => {
    setIsNavOpen(true);
  };

  const handleNavClose = () => {
    setIsNavOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="./images/logo-dark.png" alt="Logo Light" />
      </div>

      <div className="nav-menu">
        <span className="menu-item .active"><a href="/">Solution</a></span>
        <span className="menu-item"><a href="/">Pricing</a></span>
        <span className="menu-item"><a href="/">Testimonials</a></span>
        <span className="menu-item"><a href="/">Resources</a></span>
      </div>

      <div className="cta-group">
        <CtaPrimary text="Log In"/>
        <CtaSecondary text="Sign Up for Free"/>
      </div>

      <div className="menu-icons">
        
        <div className="navbar-icon">
          <CgSearch size={28} color="#4c70f0" />
        </div>
        <div className="navbar-icon" onClick={handleNavOpen}>
          <CgMenuRight size={28} color="#4c70f0" />
        </div>
      </div>

      {isNavOpen && (
        <div className="offcanvas">
          <div className="offcanvas-menu">
            <span className="offcanvas-menu-item">Solution</span>
            <span className="offcanvas-menu-item">Pricing</span>
            <span className="offcanvas-menu-item">Testimonials</span>
            <span className="offcanvas-menu-item">Resources</span>
          </div>

          <div className="offcanvas-cta-group">
          <CtaPrimary text="Log In"/>
        <CtaSecondary text="Sign Up for Free"/>
          </div>

          <div className="offcanvas-close-icon" onClick={handleNavClose}>
            <IoMdClose size={35} color="#4c70f0" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

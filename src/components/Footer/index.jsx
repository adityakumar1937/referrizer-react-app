import React from "react";
import Copywrite from "../copywrite";
import "./style.scss";

const Footer = () => {
  return (
    <>
    <div class="footer-grid">
      <div class="footer-column column-1">
        <a href="/">
          <img src="./images/logo-light.png" alt="footer-logo" />
        </a>
      </div>
      <div class="footer-column column-2">
        <h4>Company</h4>
        <ul>
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/">We're Hiring</a>
          </li>
          <li>
            <a href="/">Investors</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>
      <div class="footer-column column-3">
        <h4>Solutions</h4>
        <ul>
          <li>
            <a href="/">Customer Lead Generation</a>
          </li>
          <li>
            <a href="/">Customer Retention Boost</a>
          </li>
          <li>
            <a href="/">Reputation Management</a>
          </li>
          <li>
            <a href="/">Marketing Automation</a>
          </li>
          <li>
            <a href="/">Partner Up Network</a>
          </li>
        </ul>
      </div>
      <div class="footer-column column-4">
        <h4>Resources</h4>
        <ul>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/">Videos</a>
          </li>
          <li>
            <a href="/">Case Studies</a>
          </li>
          <li>
            <a href="/">Marketplace</a>
          </li>
          <li>
            <a href="/">Industries</a>
          </li>
        </ul>
      </div>

      <div class="footer-column column-5">
        <h4>Help</h4>
        <ul>
          <li>
            <a href="/">Support</a>
          </li>
          <li>
            <a href="/">Knowledge Base</a>
          </li>
          <li>
            <a href="/">Live Chat</a>
          </li>
        </ul>
      </div>
      <div class="footer-column column-6">
        <h4>Partners</h4>
        <ul>
          <li>
            <a href="/">Development</a>
          </li>
          <li>
            <a href="/">Affiliate Programs</a>
          </li>
          <li>
            <a href="/">Partner Offers</a>
          </li>
        </ul>
      </div>
      
    </div>
    <Copywrite/></>
    
  );
};

export default Footer;

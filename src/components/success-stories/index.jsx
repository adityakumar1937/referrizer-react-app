import React from "react";
import { FaLinkedin, FaEye } from "react-icons/fa";
import "./style.scss";
const Success = () => {
  return (
    <div className="success-section">
      <div className="success-header">
        <h5>Success Stories</h5>
        <h2>Success Stories</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel aliquam,
          massa nec hendrerit laoreet.
        </p>
      </div>

      <div class="card-container">
        {/* Box 1 */}
        <div class="card-box">
          <div class="card-bg">
            <img src="./images/qoute.png" alt="quoteicon" />
            <h5>Helped me grow my small business...</h5>
            <p>
              It makes it easy to communicate and send out marketing campaigns
              through email and text templates.
            </p>
            <div class="social">
              <span>
                <FaLinkedin /> Linkedin
              </span>
              <span>
                <FaEye />
                View Story
              </span>
            </div>
          </div>
          <div class="author">
            <img src="./images/profile (3).png" alt="authoricon" />
            <div class="info">
              <h4>Jason King</h4>
              <span>Owner at Core &amp; More Fitness</span>
            </div>
          </div>
        </div>
        {/* Box 2 */}
        <div class="card-box">
          <div class="card-bg">
            <img src="./images/qoute.png" alt="quoteicon" />
            <h5>All-in-one Marketing Automation...</h5>
            <p>
              Prior to using Referrizer I was paying over 8 different companies
              a monthly fee for individual services. I have been able to save
              over $1,200 a month by streamlining all of my services by just
              using Referrizer.
            </p>
            <div class="social">
              <span>
                <FaLinkedin /> Linkedin
              </span>
              <span>
                <FaEye />
                View Story
              </span>
            </div>
          </div>
          <div class="author">
            <img src="./images/profile (2).png" alt="authoricon" />
            <div class="info">
              <h4>Meteus Felipe</h4>
              <span>Owner at Goosebumps Cryotherapy</span>
            </div>
          </div>
        </div>
        {/* Box 3 */}
        <div class="card-box">
          <div class="card-bg">
            <img src="./images/qoute.png" alt="quoteicon" />
            <h5>We're able to spread the word about our new promos...</h5>
            <p>
              Being able to create custom offers that you can email & text to
              your clients is wonderful! You have so much flexibility in
              selecting which clients to send the offers to.
            </p>
            <div class="social">
              <span>
                <FaLinkedin /> Linkedin
              </span>
              <span>
                <FaEye />
                View Story
              </span>
            </div>
          </div>
          <div class="author">
            <img src="./images/profile (1).png" alt="authoricon" />
            <div class="info">
              <h4>Meteus Felipe</h4>
              <span>Owner at Goosebumps Cryotherapy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;

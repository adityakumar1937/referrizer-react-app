import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import "./style.scss";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <div className="faq-section">
      <div className="faq-header">
        <h5>FAQ’s</h5>
        <h2>Frequently Asked Questions</h2>
        <p>
        Get Answers to Your Queries and Learn More About Referrizer
        </p>
      </div>
      {/* FAQ Body */}
      <div className="faq-menu">
        {/* FAQ 1 */}
        <div className="faq-items">
          <div className="question" onClick={() => handleToggle(0)}>
            <h3>How can Referrizer help me increase customer engagement?</h3>
            <div className="faq-toggle">
              {activeIndex === 0 ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </div>
          </div>
          <div className={`solution ${activeIndex === 0 ? "open" : ""}`}>
            <p>
            Referrizer offers a comprehensive suite of marketing tools including email campaigns, SMS messaging, social media integration, and more to help you engage with your customers and keep them coming back.
            </p>
          </div>
        </div>
        {/* FAQ 2 */}
        <div className="faq-items">
          <div className="question" onClick={() => handleToggle(1)}>
            <h3>Can Referrizer help me generate more online reviews?</h3>
            <div className="faq-toggle">
              {activeIndex === 1 ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </div>
          </div>
          <div className={`solution ${activeIndex === 1 ? "open" : ""}`}>
            <p>
            Yes, Referrizer's online reputation management tools can help you monitor and respond to reviews, as well as automate review requests to encourage more positive reviews from satisfied customers.
            </p>
          </div>
        </div>
        {/* FAQ 3 */}
        <div className="faq-items">
          <div className="question" onClick={() => handleToggle(2)}>
            <h3>How can Referrizer help me track my marketing campaigns?</h3>
            <div className="faq-toggle">
              {activeIndex === 2 ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </div>
          </div>
          <div className={`solution ${activeIndex === 2 ? "open" : ""}`}>
            <p>
            Referrizer's advanced analytics and reporting tools allow you to track the performance of your marketing campaigns in real-time, so you can make data-driven decisions and optimize your strategy for maximum ROI.
            </p>
          </div>
        </div>
        {/* FAQ 4 */}
        <div className="faq-items">
          <div className="question" onClick={() => handleToggle(3)}>
            <h3>Is Referrizer easy to use for beginners?</h3>
            <div className="faq-toggle">
              {activeIndex === 3 ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </div>
          </div>
          <div className={`solution ${activeIndex === 3 ? "open" : ""}`}>
            <p>
            Yes, Referrizer is designed to be user-friendly and intuitive, with a simple drag-and-drop interface and step-by-step guides to help you get started.
            </p>
          </div>
        </div>
        {/* FAQ 5 */}
        <div className="faq-items">
          <div className="question" onClick={() => handleToggle(4)}>
            <h3>Can Referrizer help me automate my marketing tasks?</h3>
            <div className="faq-toggle">
              {activeIndex === 4 ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </div>
          </div>
          <div className={`solution ${activeIndex === 4 ? "open" : ""}`}>
            <p>
            Absolutely! Referrizer offers a wide range of automation features, from automated email and SMS campaigns to auto-responders and lead nurturing workflows, to help you save time and streamline your marketing efforts.
            </p>
          </div>
        </div>
        {/* FAQ 6 */}
        <div className="faq-items">
          <div className="question" onClick={() => handleToggle(5)}>
            <h3>Does Referrizer integrate with other business tools I use?</h3>
            <div className="faq-toggle">
              {activeIndex === 5 ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </div>
          </div>
          <div className={`solution ${activeIndex === 5 ? "open" : ""}`}>
            <p>
            Yes, Referrizer integrates with a variety of popular business tools, including CRMs, payment processors, scheduling software, and more, to help you streamline your workflow and stay organized.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;

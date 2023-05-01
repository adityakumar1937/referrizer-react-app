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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel aliquam,
          massa nec hendrerit laoreet.
        </p>
      </div>
      {/* FAQ Body */}
      <div className="faq-menu">
        {/* FAQ 1 */}
        <div className="faq-items">
          <div className="question" onClick={() => handleToggle(0)}>
            <h3>Lorem ipsum dummy text here</h3>
            <div className="faq-toggle">
              {activeIndex === 0 ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </div>
          </div>
          <div className={`solution ${activeIndex === 0 ? "open" : ""}`}>
            <p>
              Lorem ipsum dolor sit amet, te est inani solet laoreet, an corpora
              expetenda democritum has. Ut sit prima laboramus eloquentiam. An
              eos labore aliquip. Minim iusto detracto eu pri, qui ut periculis
              argumentum ullamcorper, velit habemus tibique an eos.
            </p>
          </div>
        </div>
        {/* FAQ 2 */}
        <div className="faq-items">
          <div className="question" onClick={() => handleToggle(1)}>
            <h3>Lorem ipsum dummy text here</h3>
            <div className="faq-toggle">
              {activeIndex === 1 ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </div>
          </div>
          <div className={`solution ${activeIndex === 1 ? "open" : ""}`}>
            <p>
              Lorem ipsum dolor sit amet, te est inani solet laoreet, an corpora
              expetenda democritum has. Ut sit prima laboramus eloquentiam. An
              eos labore aliquip. Minim iusto detracto eu pri, qui ut periculis
              argumentum ullamcorper, velit habemus tibique an eos.
            </p>
          </div>
        </div>
        {/* FAQ 3 */}
        <div className="faq-items">
          <div className="question" onClick={() => handleToggle(2)}>
            <h3>Lorem ipsum dummy text here</h3>
            <div className="faq-toggle">
              {activeIndex === 2 ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </div>
          </div>
          <div className={`solution ${activeIndex === 2 ? "open" : ""}`}>
            <p>
              Lorem ipsum dolor sit amet, te est inani solet laoreet, an corpora
              expetenda democritum has. Ut sit prima laboramus eloquentiam. An
              eos labore aliquip. Minim iusto detracto eu pri, qui ut periculis
              argumentum ullamcorper, velit habemus tibique an eos.
            </p>
          </div>
        </div>
        {/* FAQ 4 */}
        <div className="faq-items">
          <div className="question" onClick={() => handleToggle(3)}>
            <h3>Lorem ipsum dummy text here</h3>
            <div className="faq-toggle">
              {activeIndex === 3 ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </div>
          </div>
          <div className={`solution ${activeIndex === 3 ? "open" : ""}`}>
            <p>
              Lorem ipsum dolor sit amet, te est inani solet laoreet, an corpora
              expetenda democritum has. Ut sit prima laboramus eloquentiam. An
              eos labore aliquip. Minim iusto detracto eu pri, qui ut periculis
              argumentum ullamcorper, velit habemus tibique an eos.
            </p>
          </div>
        </div>
        {/* FAQ 5 */}
        <div className="faq-items">
          <div className="question" onClick={() => handleToggle(4)}>
            <h3>Lorem ipsum dummy text here</h3>
            <div className="faq-toggle">
              {activeIndex === 4 ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </div>
          </div>
          <div className={`solution ${activeIndex === 4 ? "open" : ""}`}>
            <p>
              Lorem ipsum dolor sit amet, te est inani solet laoreet, an corpora
              expetenda democritum has. Ut sit prima laboramus eloquentiam. An
              eos labore aliquip. Minim iusto detracto eu pri, qui ut periculis
              argumentum ullamcorper, velit habemus tibique an eos.
            </p>
          </div>
        </div>
        {/* FAQ 6 */}
        <div className="faq-items">
          <div className="question" onClick={() => handleToggle(5)}>
            <h3>Lorem ipsum dummy text here</h3>
            <div className="faq-toggle">
              {activeIndex === 5 ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </div>
          </div>
          <div className={`solution ${activeIndex === 5 ? "open" : ""}`}>
            <p>
              Lorem ipsum dolor sit amet, te est inani solet laoreet, an corpora
              expetenda democritum has. Ut sit prima laboramus eloquentiam. An
              eos labore aliquip. Minim iusto detracto eu pri, qui ut periculis
              argumentum ullamcorper, velit habemus tibique an eos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;

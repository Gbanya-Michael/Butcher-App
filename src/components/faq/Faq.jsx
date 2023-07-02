import React from "react";
import "./Faq.scss";

export default function Faq() {
  return (
    <div>
      <section className="faq">
        <div className="faq-box">
          <div className="meat-shadow-left">
            <img src="design1.svg" alt="" />
            <img src="meat2-shadow.svg" alt="" />
          </div>
          <ul className="faq-sect">
            <li className="faq-header-sub">
              <h4>FAQ</h4>
            </li>
            <li className="faq-header">
              <h2>Have any quistion in mind?</h2>
            </li>
            <li className="faq-desc">
              <p>
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy
              </p>
            </li>

            <li className="question-card">
              <h4 className="question">Simply dummy text of the printing </h4>
              <p className="answer">
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy
              </p>
            </li>
            <li className="question-card">
              <h4 className="question">Simply dummy text of the printing </h4>
            </li>
            <li className="question-card">
              <h4 className="question">Simply dummy text of the printing </h4>
            </li>
            <li className="question-card">
              <h4 className="question">Simply dummy text of the printing </h4>

              <span>v</span>
            </li>
          </ul>
          <div className="meat-shadow-right">
            <img src="meat1-shadow.svg" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}

import React from "react";
import "./Testimonial.scss";

export default function Testimonial() {
  return (
    <>
      <div className="testimonial">
        <div className="testimonial-box">
          <div className="testimonial-person">
            <img src="testimonial-elements/person.svg" alt="" />
          </div>
          <div className="testimonial-body">
            <div className="testimonial-stars">
              <img src="header_elements/star-filled.svg" />
              <img src="header_elements/star-filled.svg" />
              <img src="header_elements/star-filled.svg" />
              <img src="header_elements/star-filled.svg" />
              <img src="header_elements/star.svg" />
            </div>
            <div className="testimonial-text">
              <p>
                It was a pleasure to work with Daniele on the Housebiz project
                (Real Estate). We helped the Housebiz team to design the Web{" "}
              </p>
            </div>
            <div className="testimonial-pagenate">
              <ul className="person-details">
                <li className="details-name">JOHN MACKEY</li>
                <li className="details-position">co- Founder of SISKO</li>
              </ul>
              <div className="next-previous">
                <button className="btn-left">
                  <img src="testimonial-elements/arrow-left.svg" alt="" />
                </button>
                <button className="btn-right">
                  <img src="testimonial-elements/arrow-right.svg" alt="" />
                </button>
              </div>
            </div>
            <ul className="persons">
              <li className="person-box">
                <img src="testimonial-elements/person1.jpg" alt="" />
              </li>
              <li className="person-box">
                <img src="testimonial-elements/person2.jpg" alt="" />
              </li>
              <li className="person-box">
                <img src="testimonial-elements/person3.jpg" alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

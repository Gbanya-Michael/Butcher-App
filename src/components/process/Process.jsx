import React from "react";
import "./Process.scss";

export default function Process() {
  return (
    <>
      <section className="process">
        <div className="process-box">
          <ul className="our-process">
            <li>
              <h4 className="text1">PROCESS</h4>
            </li>
            <li>
              <h2 className="text2">Our Quick Process</h2>
            </li>
            <li>
              <p className="text3">
                Simply dummy text of the printing and typesetting industry.
              </p>
            </li>
          </ul>
          <ul className="process-card">
            <li className="steps">
              <img
                className="chicken"
                src="process-elements/chicken.png"
                alt=""
              />
              <h3>1. Choose Meat</h3>
              <p>
                s simply dummy text of the printing and typesetting industry.
                Lorem
              </p>
            </li>
            <li className="steps">
              <img src="process-elements/order.png" alt="" />
              <h3>2. Quick Order</h3>
              <p>
                s simply dummy text of the printing and typesetting industry.
                Lorem
              </p>
            </li>
            <li className="steps">
              {/* <img className="section-design" src="design1.svg" alt="" /> */}
              <img src="process-elements/door.png" alt="" />
              <h3>3. Find at Doorstep</h3>
              <p>
                s simply dummy text of the printing and typesetting industry.
                Lorem
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

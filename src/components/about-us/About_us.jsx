import React from "react";
import "./About-us.scss";

export default function About_us() {
  return (
    <>
      <div className="about-us">
        <div className="about-us-box">
          <div className="since1997">
            <h3> Meat Delivery Company Since 1997</h3>
            <img src="history.svg" alt="" />
          </div>
          <ul className="video-section">
            <li className="text">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy.S Simply dummy text
              of Simply dummy text of the printing and of Simply dummy text of
              the printing and
            </li>
            <li className="video">
              <iframe
                width="834"
                height="369"
                src="https://www.youtube.com/embed/k6eE3c70hgg?list=RD97abEozJjCg"
                title="Omah Lay -  soso (Official Music Video)"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </li>
          </ul>
          <div className="about-us-design">
            <img src="design-big.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

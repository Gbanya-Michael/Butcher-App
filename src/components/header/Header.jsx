import React from "react";
import "./Header.scss";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="headerbox">
          <div className="herotop">
            <h4 className="herotop__history">FRESH MEAT SINCE 1997</h4>
            <h2 className="herotop__statement">
              Get fresh meat at your doorstep...
            </h2>
            <p className="herotop__text">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy
            </p>
          </div>
          <div className="herotopbig">
            <h4 className="herotopbig__history">FRESH MEAT SINCE 1997</h4>
            <h2 className="herotopbig__statement">
              Get fresh meat at your doorstep...
            </h2>
            <p className="herotopbig__text">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy
            </p>
          </div>
          <div className="rating">
            <a href="/" className="rating__collection">
              See Our Collection <span>⇥</span>
            </a>

            <div className="rating__cards">
              <div>
                <ul className="rating__cards--stars">
                  <li>
                    <img src="header_elements/star-filled.svg" alt="" />
                  </li>
                  <li>
                    <img src="header_elements/star-filled.svg" alt="" />
                  </li>
                  <li>
                    <img src="header_elements/star-filled.svg" alt="" />
                  </li>
                  <li>
                    <img src="header_elements/star-filled.svg" alt="" />
                  </li>
                  <li>
                    <img src="header_elements/star.svg" alt="" />
                  </li>
                </ul>
                <p>4.9/5. From 213 Reviews</p>
                <img src="header_elements/food.svg" alt="" />
              </div>
              <div>
                <ul className="rating__cards--stars">
                  <li>
                    <img src="header_elements/star-filled.svg" alt="" />
                  </li>
                  <li>
                    <img src="header_elements/star-filled.svg" alt="" />
                  </li>
                  <li>
                    <img src="header_elements/star-filled.svg" alt="" />
                  </li>
                  <li>
                    <img src="header_elements/star-filled.svg" alt="" />
                  </li>
                  <li>
                    <img src="header_elements/star.svg" alt="" />
                  </li>
                </ul>
                <p>4.5. From 410 Reviews</p>
                <img src="header_elements/capterra.svg" alt="" />
              </div>
            </div>
          </div>

          <div className="herobottom">
            <img
              className="hero-meat"
              src="header_elements/hero-meat.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

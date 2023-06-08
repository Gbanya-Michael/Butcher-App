import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-box">
          <div className="design1">
            <img src="design1.svg" alt="" />
          </div>

          <div className="footercards">
            <div className="footercards__left">
              <ul className="footercards__left--shop">
                <h4>Shop</h4>
                <li>
                  <a href="/" alt="">
                    Specialty
                  </a>
                </li>
                <li>
                  <a href="/" alt="">
                    Offers
                  </a>
                </li>
                <li>
                  <a href="/" alt="">
                    Updates
                  </a>
                </li>
                <li>
                  <a href="/" alt="">
                    Best Sellers
                  </a>
                </li>
              </ul>

              <ul className="footercards__left--about">
                <h4>About Us</h4>
                <li>
                  <a href="/" alt="">
                    Who We Are
                  </a>
                </li>
                <li>
                  <a href="/" alt="">
                    Our Achievements
                  </a>
                </li>
                <li>
                  <a href="/" alt="">
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="/" alt="">
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>

            <div className="footercards__subscribe">
              <ul>
                <li>
                  <input type="email" placeholder="Your Email Address" />
                </li>
                <li>
                  <button>Subscribe</button>
                </li>
              </ul>
            </div>
            <div className="footercards__right">
              <ul className="footercards__right--social">
                <h4>Social Links</h4>
                <li>
                  <a href="/" alt="">
                    Facebook Page
                  </a>
                </li>
                <li>
                  <a href="/" alt="">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="/" alt="">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="/" alt="">
                    Pinterest
                  </a>
                </li>
              </ul>

              <ul className="footercards__right--contact">
                <h4>Contact</h4>
                <li>
                  <a href="/" alt="">
                    Hellomeat@mail.com
                  </a>
                </li>
                <li>
                  <a href="/" alt="">
                    Opening Hours
                  </a>
                </li>
                <li>
                  <a href="/" alt="">
                    Locations
                  </a>
                </li>
                <li>
                  <a href="/" alt="">
                    09776737773
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="copyright">
            <img src="design2.svg" className="copyright__design2" alt="" />
            <p>CopyRight 2021 Alright reserved by Meatfit</p>
          </div>
        </div>
      </footer>
    </>
  );
}

import React from "react";
import "./Recent.scss";

export default function Recent() {
  return (
    <>
      <div>
        <section className="recent">
          <div className="recent-box">
            <ul className="recent-products">
              <li>
                <h4 className="recent-header-sub">Recent Products</h4>
              </li>
              <li>
                <h2 className="recent-header">Recent Products</h2>
              </li>
              <li>
                <p className="recent-desc">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy
                </p>
              </li>
            </ul>
            <ul className="recent-cards">
              <li className="recent-card">
                <div className="recent-photo">
                  <img src="recent-images/beef-card1.jpg" alt="" />
                </div>

                <p className="card-subd">
                  s simply dummy text of the printing and typesetting industry.
                  Lorem
                </p>
                <h3 className="card-title">Beef 1 Kg Pack</h3>
                <p className="card-desc">
                  s simply dummy text of the printing and typesetting industry.
                  Lorem
                </p>
                <button className="card-btn"> Add To Cart - $12</button>
              </li>
              <li className="recent-card">
                <div className="recent-photo">
                  <img src="recent-images/beef-card1.jpg" alt="" />
                </div>

                <p className="card-subd">
                  s simply dummy text of the printing and typesetting industry.
                  Lorem
                </p>
                <h3 className="card-title">Beef 1 Kg Pack</h3>
                <p className="card-desc">
                  s simply dummy text of the printing and typesetting industry.
                  Lorem
                </p>
                <button className="card-btn"> Add To Cart - $12</button>
              </li>
              <li className="recent-card">
                <div className="recent-photo">
                  <img src="recent-images/beef-card1.jpg" alt="" />
                </div>

                <p className="card-subd">
                  s simply dummy text of the printing and typesetting industry.
                  Lorem
                </p>
                <h3 className="card-title">Beef 1 Kg Pack</h3>
                <p className="card-desc">
                  s simply dummy text of the printing and typesetting industry.
                  Lorem
                </p>
                <button className="card-btn"> Add To Cart - $12</button>
              </li>
              <li className="recent-card">
                <div className="recent-photo">
                  <img src="recent-images/beef-card1.jpg" alt="" />
                </div>

                <p className="card-subd">
                  s simply dummy text of the printing and typesetting industry.
                  Lorem
                </p>
                <h3 className="card-title">Beef 1 Kg Pack</h3>
                <p className="card-desc">
                  s simply dummy text of the printing and typesetting industry.
                  Lorem
                </p>
                <button className="card-btn"> Add To Cart - $12</button>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}

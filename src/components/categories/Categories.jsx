import React from "react";
import "./Categories.scss";

export default function Categories() {
  return (
    <div>
      <section className="categories">
        <div className="categories-box">
          <ul className="categories-sect">
            <li>
              <h4 className="categories-header-sub">Categories</h4>
            </li>
            <li>
              <h2 className="categories-header">Popular Categories</h2>
            </li>
            <li>
              <p className="categories-desc">
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy
              </p>
            </li>
          </ul>
          <ul className="categories-cards">
            <li className="categories-card">
              <div className="categories-photo">
                <img src="recent-images/beef-card1.jpg" alt="" />
              </div>

              <h3 className="card-title">Beef</h3>
            </li>
            <li className="categories-card">
              <div className="categories-photo">
                <img src="recent-images/beef-card1.jpg" alt="" />
              </div>

              <h3 className="card-title">Chicken</h3>
            </li>
            <li className="categories-card">
              <div className="categories-photo">
                <img src="recent-images/beef-card1.jpg" alt="" />
              </div>

              <h3 className="card-title">Lamb</h3>
            </li>
          </ul>
          <div className="categories-see-all">
            <a href="/">See All →</a>
          </div>
        </div>
      </section>
    </div>
  );
}

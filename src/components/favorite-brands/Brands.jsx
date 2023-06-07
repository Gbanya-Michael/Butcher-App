import React from "react";
import "./Brands.scss";

export default function Brands() {
  return (
    <>
      <div className="brands">
        <ul className="brands-box">
          <li>
            <img src="favorite-brands-logos/Facebook.svg" alt="" />{" "}
          </li>
          <li>
            <img src="favorite-brands-logos/Tinder.svg" alt="" />{" "}
          </li>
          <li>
            <img src="favorite-brands-logos/Microsoft.svg" alt="" />{" "}
          </li>
          <li>
            <img src="favorite-brands-logos/Airbnb.svg" alt="" />{" "}
          </li>
          <li>
            <img src="favorite-brands-logos/Hubspot.svg" alt="" />{" "}
          </li>
        </ul>
      </div>
    </>
  );
}

import React from "react";
import "./Navbar.scss";
// import { reactcomponent as Logo } from "./meatfitlogo.svg";

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <nav className="navbox">
          {/* <input type="checkbox" class="navbox__toggle" id="hamburger" hidden />
          <ul class="navbox__list">
            <li class="navbox__hamburger">
              <label for="hamburger">
                <img src="menu.svg" alt="" />
              </label>
            </li>
          </ul> */}

          <div className="navbox__logo">
            <a href="/">
              <img src="meatfitlogo.svg" alt="" />
            </a>
          </div>
          <ul className="navbox__items">
            <li>
              <a href="/">
                Beef <span>︿</span>
              </a>
            </li>
            <li>
              <a href="/">Meat</a>
            </li>
            <li>
              <a href="/">
                Chicken <span>︿</span>
              </a>
            </li>
            <li>
              <a href="/">Sea Food</a>
            </li>
            <li>
              <a href="/">Poultry </a>
            </li>
          </ul>
          <ul className="navbox__itemsbig">
            <li>
              <a href="/">
                Beef <span>︿</span>
              </a>
            </li>
            <li>
              <a href="/">Meat</a>
            </li>
            <li>
              <a href="/">
                Chicken <span>︿</span>
              </a>
            </li>
            <li>
              <a href="/">Sea Food</a>
            </li>
            <li>
              <a href="/">Poultry </a>
            </li>
          </ul>
          <div className="navbox__icons">
            <a href="/">
              <img src="/navbar_icons/user.svg" alt="" />
            </a>
            <a href="/">
              <img src="/navbar_icons/heart.svg" alt="" />
            </a>
            <a href="/">
              <img src="/navbar_icons/shopping-bag.svg" alt="" />
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}

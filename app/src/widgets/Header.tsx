import React from "react";
import "../styles/Header.css";
import logo from "../assets/img/logo.png";

import search from "../assets/svg/search.svg";
import profile from "../assets/svg/profile.svg";
import favourites from "../assets/svg/favourites.svg";
import cart from "../assets/svg/cart.svg";
import more from "../assets/svg/more.svg";

function Header(transparent: boolean) {
  return (
    <header>
      <div className="header-wrapper">
        <img src={logo} alt="world-bike-logo" className="logo" />
        <div className="nav-wrapper nav-wrapper-description">
          <nav>
            <ul>
              <li className="list-item">
                <a href="/">ВЕЛОСИПЕДЫ</a>
              </li>
              <li className="list-item">
                <a href="/">ЗАПЧАСТИ</a>
              </li>
              <li className="list-item">
                <a href="/">ЭКИПИРОВКА</a>
              </li>
              <li className="list-item">
                <a href="/">АКСЕССУАРЫ</a>
              </li>
              <li className="list-item">
                <a href="/">ВЕЛОСТАНКИ</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="nav-wrapper nav-wrapper-icons">
          <nav>
            <ul>
              <li className="list-item">
                <a href="/">
                  <img src={search} alt="search" />
                </a>
              </li>
              <li className="list-item">
                <a href="/">
                  <img src={profile} alt="profile" />
                </a>
              </li>
              <li className="list-item">
                <a href="/">
                  <img src={favourites} alt="favourites" />
                </a>
              </li>
              <li className="list-item">
                <a href="/">
                  <img src={cart} alt="cart" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="nav-wrapper nav-wrapper-more">
          <a className="nav_item" id="more" href="/">
            <img src={more} alt="more" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;

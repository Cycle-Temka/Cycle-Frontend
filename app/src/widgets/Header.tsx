import React from "react";
import "../styles/App.css";
import "../styles/Header.css";

import logo from "../assets/img/logo.png";
import search from "../assets/svg/search.svg";
import profile from "../assets/svg/profile.svg";
import favourites from "../assets/svg/favourites.svg";
import cart from "../assets/svg/cart.svg";
import more from "../assets/svg/more.svg";

function Header(props: object) {
  return (
    <header className="Header" style={{"backgroundColor": props["transparent"] ? "#FFFFFF00" : "#000000"}}>
      <img src={logo} alt="Logo" style={{ width: "87px", height: "49px" }} />

      <div className="sections">
        <a className="nav_item" id="bicycles" href="#">
          ВЕЛОСИПЕДЫ
        </a>
        <a className="nav_item" id="parts" href="#">
          ЗАПЧАСТИ
        </a>
        <a className="nav_item" id="equipment" href="#">
          ЭКИПИРОВКА
        </a>
        <a className="nav_item" id="accessories" href="#">
          АКСЕССУАРЫ
        </a>
        <a className="nav_item" id="bike_racks" href="#">
          ВЕЛОСТАНКИ
        </a>
      </div>

      <div className="sections_icons">
        <a className="nav_item" id="search" href="#">
          <img src={search} alt="search_img"></img>
        </a>
        <a className="nav_item" id="profile" href="#">
          <img src={profile} alt="profile_img"></img>
        </a>
        <a className="nav_item" id="favourites" href="#">
          <img src={favourites} alt="favourites_img"></img>
        </a>
        <a className="nav_item" id="cart" href="#">
          <img src={cart} alt="cart_img"></img>
        </a>
      </div>

      <nav className="more">
        <a className="nav_item" id="more" href="#">
          <img src={more} alt="more_img"></img>
        </a>
      </nav>
    </header>
  );
}

export default Header;

import React from "react";
import "./Header.css";
import logo from "../../assets/img/logo.png";

function Header(transparent: boolean) {
  return (
    <header>
      <div className="header-wrapper">
        <a className="logo-link" href="/">
          <img src={logo} alt="" className="logo" />
        </a>
        <nav className="header-menu">
          <ul className="header-menu-list ul">
            <li className="list-link">
              <a href="/">ВЕЛОСИПЕДЫ</a>
            </li>
            <li className="list-link">
              <a href="/">ЗАПЧАСТИ</a>
            </li>
            <li className="list-link">
              <a href="/">ЭКИПИРОВКА</a>
            </li>
            <li className="list-link">
              <a href="/">АКСЕССУАРЫ</a>
            </li>
            <li className="list-link">
              <a href="/">ВЕЛОСТАНКИ</a>
            </li>
          </ul>
        </nav>
        <nav className="header-actions">
          <ul className="header-actions-list ul">
            <li className="list-link">
              <a href="/" className="search svg">
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 8.5C16 12.6421 12.6421 16 8.5 16C4.35786 16 1 12.6421 1 8.5C1 4.35786 4.35786 1 8.5 1C12.6421 1 16 4.35786 16 8.5Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17.9994 17.9999L13.8027 13.8032"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </li>
            <li className="list-link">
              <a href="/" className="profile svg">
                <svg
                  width="18"
                  height="20"
                  viewBox="0 0 18 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 13H5C2.79086 13 1 14.7909 1 17V19H9H17V17C17 14.7909 15.2091 13 13 13Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9 9C11.2091 9 13 7.20914 13 5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5C5 7.20914 6.79086 9 9 9Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </li>
            <li className="list-link">
              <a href="/" className="favourites svg">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.3314 12.0474L12 20L19.6686 12.0474C20.5211 11.1633 21 9.96429 21 8.71405C21 6.11055 18.9648 4 16.4543 4C15.2487 4 14.0925 4.49666 13.24 5.38071L12 6.66667L10.76 5.38071C9.90749 4.49666 8.75128 4 7.54569 4C5.03517 4 3 6.11055 3 8.71405C3 9.96429 3.47892 11.1633 4.3314 12.0474Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </li>
            <li className="list-link">
              <a href="/" className="cart svg">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 17H6.5L4.5 3H2"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.78613 5H21.0004L18.0004 14H6.07184"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9 21C10.1046 21 11 20.1046 11 19C11 17.8954 10.1046 17 9 17C7.89543 17 7 17.8954 7 19C7 20.1046 7.89543 21 9 21Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
        <button className="header-burger-button">
          <svg
            width="32"
            height="20"
            viewBox="0 0 32 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              y1="1.25"
              x2="32"
              y2="1.25"
              stroke="white"
              stroke-width="1.5"
            />
            <line
              x1="8"
              y1="10.25"
              x2="32"
              y2="10.25"
              stroke="white"
              stroke-width="1.5"
            />
            <line
              x1="8"
              y1="19.25"
              x2="32"
              y2="19.25"
              stroke="white"
              stroke-width="1.5"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;

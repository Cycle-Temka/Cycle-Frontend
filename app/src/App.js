import React from "react";
// import { useState, useMemo } from 'react';
import "./styles/index.css";
import "./styles/App.css";
import Header from "./widgets/Header/Header.tsx";
import Footer from "./widgets/Footer/Footer.tsx";
import HomePage from "./widgets/HomePage/HomePage.tsx";

import b1 from "./assets/img/slider-shimano.png";
import b2 from "./assets/img/slider-tacx.png";
import b3 from "./assets/img/slider-wahoo.png";
import b4 from "./assets/img/slider-topeak.png";
import b5 from "./assets/img/slider-sram.png";
import b6 from "./assets/img/slider-trek.png";
import b7 from "./assets/img/slider-wilier.png";

function App() {
  return (
    <div className="App">
      <Header transparent={true} />
      <main>
        <HomePage />
        {/* START OF SECTIONS */}
        <section className="slider-section">
          {" "}
          {/* SliderSection */}
          <div className="slider-section-wrapper" id="tickers-1">
            <div className="slider-ticker" id="shimano">
              <a href="/">
                <img src={b1} alt="" />
              </a>
            </div>
            <div className="slider-ticker" id="tacx">
              <a href="/">
                <img src={b2} alt="" />
              </a>
            </div>
            <div className="slider-ticker" id="wahoo">
              <a href="/">
                <img src={b3} alt="" />
              </a>
            </div>
            <div className="slider-ticker" id="topeak">
              <a href="/">
                <img src={b4} alt="" />
              </a>
            </div>
            <div className="slider-ticker" id="sram">
              <a href="/">
                <img src={b5} alt="" />
              </a>
            </div>
            <div className="slider-ticker" id="trek">
              <a href="/">
                <img src={b6} alt="" />
              </a>
            </div>
            <div className="slider-ticker" id="wilier">
              <a href="/">
                <img src={b7} alt="" />
              </a>
            </div>
          </div>
          <div className="slider-section-wrapper" id="tickers-2">
            <div className="slider-ticker" id="shimano">
              <a href="/">
                <img src={b1} alt="" />
              </a>
            </div>
            <div className="slider-ticker" id="tacx">
              <a href="/">
                <img src={b2} alt="" />
              </a>
            </div>
            <div className="slider-ticker" id="wahoo">
              <a href="/">
                <img src={b3} alt="" />
              </a>
            </div>
            <div className="slider-ticker" id="topeak">
              <a href="/">
                <img src={b4} alt="" />
              </a>
            </div>
            <div className="slider-ticker" id="sram">
              <a href="/">
                <img src={b5} alt="" />
              </a>
            </div>
            <div className="slider-ticker" id="trek">
              <a href="/">
                <img src={b6} alt="" />
              </a>
            </div>
            <div className="slider-ticker" id="wilier">
              <a href="/">
                <img src={b7} alt="" />
              </a>
            </div>
          </div>
        </section>
        {/* END OF SECTIONS */}
      </main>
      <Footer />
    </div>
  );
}

export default App;

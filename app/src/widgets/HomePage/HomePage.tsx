import React from "react";
import MyButton from "../Button/Button.tsx";
import "./HomePage.css";

function HomePage() {
  return (
    <article>
      <div className="homepage-wrapper">
        <div className="homepage-offer-wrapper">
          <h1 className="homepage-title">Электро велосипеды</h1>
          <p className="homepage-description">
            Cento10 Hybrid — это гоночный велосипед c помогающим педалированию
            электроприводом, который устанавливает новый, очень высокий стандарт
            для данной категории
          </p>
          <MyButton className="homepage-button">Подробнее</MyButton>
        </div>
        <div className="homepage-nav-wrapper">
          <div className="homepage-nav-item homepage-nav-item-1">
            <a href="/">
              Экстремальное
              <br /> вождение на горном
              <br /> велосипеде
            </a>
          </div>

          <div className="homepage-nav-item homepage-nav-item-2">
            <a href="/">
              Велосипеды <br />
              для профессионалов
            </a>
          </div>

          <div className="homepage-nav-item homepage-nav-item-3">
            <a href="/">
              Долгая поездка <br /> на шоссейном велосипеде
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default HomePage;

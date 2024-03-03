import React from "react";
import "../styles/HomePage.css";
// import styles from '/JavaScript/Cycle-Frontend/app/src/styles/Footer.css';

function HomePage() {
  return (
    <article className="HomePage">
      <section className="hp_offer">
        <span className="promo_h">
          ЭЛЕКТРО
          <br />
          ВЕЛОСИПЕДЫ
        </span>
        <span className="promo_t">
          Cento10 Hybrid — это гоночный велосипед c помогающим <br />{" "}
          педалированию электроприводом, который устанавливает новый,
          <br /> очень высокий стандарт для данной категории
        </span>
        <button className="more_details_btn">Подробнее</button>
      </section>

      <section className="hp_bottom">
        <a className="hp_bottom_item" id="hpbi_1">
          Экстремальное
          <br /> вождение на горном
          <br /> велосипеде
        </a>

        <a className="hp_bottom_item" id="hpbi_2">
          Велосипеды <br />
          для профессионалов
        </a>

        <a className="hp_bottom_item" id="hpbi_3">
          Долгая поездка <br /> на шоссейном велосипеде
        </a>
      </section>
    </article>
  );
}

export default HomePage;

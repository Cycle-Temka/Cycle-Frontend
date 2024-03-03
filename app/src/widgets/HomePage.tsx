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
        <button className="more_details">Подробнее</button>
      </section>

      <section className="hp_bottom">
        <article className="hp_bottom_item" id="hpbi_1">
          Экстремальное
          <br /> вождение на горном
          <br /> велосипеде
        </article>

        <article className="hp_bottom_item" id="hpbi_2">
          Велосипеды <br />
          для профессионалов
        </article>

        <article className="hp_bottom_item" id="hpbi_3">
          Долгая поездка <br /> на шоссейном велосипеде
        </article>
      </section>
    </article>
  );
}

export default HomePage;

import React from "react";
import "../styles/HomePage.css";
import MyButton from "./MyButton.tsx";

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
        <MyButton> Подробнее</MyButton>
      </section>

      <section className="hp_bottom">
      <div id="hp_bottom_item_1">
        <a >
          Экстремальное
          <br /> вождение на горном
          <br /> велосипеде
        </a>
      </div>

        <div id="hp_bottom_item_2"><a >
          Велосипеды <br />
          для профессионалов
        </a></div>

        <div id="hp_bottom_item_3"><a >
          Долгая поездка <br /> на шоссейном велосипеде
        </a></div>
      </section>
    </article>
  );
}

export default HomePage;

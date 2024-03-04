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
        <MyButton>Подробнее</MyButton>
      </section>

      <section className="hp_bottom">
        <a id="hp_bottom_item_1">
          Экстремальное
          <br /> вождение на горном
          <br /> велосипеде
        </a>

        <a id="hp_bottom_item_2">
          Велосипеды <br />
          для профессионалов
        </a>

        <a id="hp_bottom_item_3">
          Долгая поездка <br /> на шоссейном велосипеде
        </a>
      </section>
    </article>
  );
}

export default HomePage;

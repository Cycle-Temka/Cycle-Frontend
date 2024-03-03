import React from "react";
import "../styles/HomePage.css";
// import styles from '/JavaScript/Cycle-Frontend/app/src/styles/Footer.css';

function HomePage() {
  return (
    <article className="HomePage">
      <section className="homepage_offer">
        <img id="main-bg-image" alt="background" />
        <h1>
          ЭЛЕКТРО
          <br />
          ВЕЛОСИПЕДЫ
        </h1>
        <h4>
          Cento10 Hybrid — это гоночный велосипед с помогающим <br />{" "}
          педалированию электроприводом, который устанавливает новый,
          <br /> очень высокий стандарт для данной категории
        </h4>
        <button className="more_details">Подробнее</button>
      </section>
      <section className="homepage_bottom">
        <article className="homepage_bottom_item_1">
          Экстрематльное
          <br /> вождение на горном
          <br /> велосипеде
          <br />
          подробнее
        </article>

        <article className="homepage_bottom_item_2">
          Велосипеды <br />
          для профессионалов
        </article>

        <article className="homepage_bottom_item_3">
          Долгая поездка <br /> на шоссейном велосипеде
        </article>
      </section>
    </article>
  );
}

export default HomePage;

import React from "react";
import "../styles/Footer.css";
import footer_biker from "../assets/img/footer_biker.png";
import logo from "../assets/img/logo.png";
import MyButton from "./MyButton.tsx";
import MyInput from "./MyInput.tsx";

function Footer() {
  return (
    <footer>
      <div className="newsletter">
        <form className="newsletter_form">
          <span style={{ "font-family": "bebas", "font-size": 64 }}>
            Подпишитесь на наши новости
          </span>

          <br />
          <MyInput type="email" value="E-mail" />

          <MyButton>Подписаться</MyButton>

          <br />
          <div className="checkbox">
            <MyInput type="checkbox" />
            <span>Согласен(на) на обработку персональных данных</span>
          </div>
        </form>
        <img className="newsletter_img" src={footer_biker} alt=""></img>
      </div>

      <div className="about">
        <div className="links">
          <div>
            <img src={logo} alt=""></img>
            <span>
              Компания World-bikes
              <br /> специализируется на продаже
              <br /> товаров для велосипедного спорта.
            </span>
          </div>
        </div>
        <hr />

        <div className="terms_of_use">
          <span>© 2023 WORLD BIKE</span>
          <a>Пользовательское соглашение</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

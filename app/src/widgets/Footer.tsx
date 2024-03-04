import React from "react";
import "../styles/Footer.css";
import footer_biker from "../assets/img/footer_biker.png";

function Footer() {
  return (
    <footer>
      <div className="newsletter">
        <div className="newsletter_form">
          <span>Подпишитесь на наши новости</span>
          <input value="E-mail" />
          <button>Подписаться</button>
          <br />
          <div className="checkbox_form">
            <input type="checkbox"></input>
            <span>Согласен(на) на обработку персональных данных</span>
          </div>
        </div>
        <img className="footer_biker_img" src={footer_biker} alt=""></img>
      </div>
      <div className="footer_about">About</div>
    </footer>
  );
}

export default Footer;

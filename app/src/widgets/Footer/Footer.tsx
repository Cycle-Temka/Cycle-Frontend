import React from "react";
import "./Footer.css";

import MyButton from "../Button/Button.tsx";
import Input from "../Input/Input.tsx";

import footer from "./footer-biker.png";
import logo from "../../assets/img/logo.png";
import phone from "./footer-smartphone.png";
import navigation from "./footer-navigation.png";
import mail from "./footer-mail.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-form">
        <div className="form-wrapper">
          <p className="form-title">Подпишитесь на наши новости</p>
          <form className="form-dialog">
            <Input type="email" className="email" placeholder="E-mail" />
            <MyButton className="subscribe">Подписаться</MyButton>
          </form>
          <form className="form-checkbox">
            <Input type="checkbox" className="checkbox" />
            <p className="checkbox-description">
              Согласен(на) на обработку персональных данных
            </p>
          </form>
        </div>
        <img src={footer} alt="" className="footer-image" />
      </div>
      <div className="links-wrapper">
        <div className="links-top">
          <div className="links-logo">
            <p>
              <a className="logo-link" href="/">
                <img src={logo} alt="" className="logo" />
              </a>
            </p>
            <p className="logo-description">
              Компания World-bikes специализируется на продаже товаров для
              велосипедного спорта.
            </p>
          </div>
          <div className="footer-links-wrapper">
            <nav className="footer-menu catalog">
              <p className="footer-menu-title">Каталог</p>
              <ul className="footer-menu-list">
                <li className="footer-menu-link">
                  <a href="/">Велосипеды</a>
                </li>
                <li className="footer-menu-link">
                  <a href="/">Экипировка</a>
                </li>
                <li className="footer-menu-link">
                  <a href="/">Запчасти</a>
                </li>
                <li className="footer-menu-link">
                  <a href="/">Велостанки</a>
                </li>
                <li className="footer-menu-link">
                  <a href="/">Аксессуары</a>
                </li>
              </ul>
            </nav>
            <nav className="footer-menu for-client">
              <p className="footer-menu-title">Для клиента</p>
              <ul className="footer-menu-list">
                <li className="footer-menu-link">
                  <a href="/">О нас</a>
                </li>
                <li className="footer-menu-link">
                  <a href="/">Доставка и оплата</a>
                </li>
                <li className="footer-menu-link">
                  <a href="/">Блог</a>
                </li>
                <li className="footer-menu-link">
                  <a href="/">Контакты</a>
                </li>
                <li className="footer-menu-link">
                  <a href="/">Веломастерская</a>
                </li>
                <li className="footer-menu-link">
                  <a href="/">Хранение</a>
                </li>
                <li className="footer-menu-link">
                  <a href="/">Гарантии</a>
                </li>
              </ul>
            </nav>
            <nav className="footer-menu contacts">
              <p className="footer-menu-title">Контакты</p>
              <ul className="footer-menu-list">
                <li className="footer-menu-link">
                  <div className="menu-img-desc">
                    <div className="menu-img-wrapper">
                      <img src={phone} alt="" className="menu-img" />
                    </div>
                    <div className="menu-description">
                      <p>
                        <a className="menu-subtitle" href="/">
                          +7(495)055-75-86
                        </a>
                      </p>
                      <p>
                        <a className="menu-subtitle" href="/">
                          +7(965)142-22-99
                        </a>
                      </p>
                    </div>
                  </div>
                </li>
                <li className="footer-menu-link">
                  <div className="menu-img-desc">
                    <div className="menu-img-wrapper">
                      <img src={navigation} alt="" className="menu-img" />
                    </div>
                    <p className="menu-description">
                      <a className="menu-subtitle" href="/">
                        г. Москва, ул. Доватора, 7/8 с1
                      </a>
                    </p>
                  </div>
                </li>
                <li className="footer-menu-link">
                  <div className="menu-img-desc">
                    <div className="menu-img-wrapper">
                      <img src={mail} alt="" className="menu-img" />
                    </div>
                    <p className="menu-description">
                      <a className="menu-subtitle" href="/">
                        order@world-bike.ru
                      </a>
                    </p>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="links-divider" />
        <div className="terms-of-use-wrapper">
          <p>
            <a className="company-link" href="/">
              © 2023 WORLD BIKE
            </a>
          </p>
          <p>
            <a className="terms-link" href="/">
              Пользовательское соглашение
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

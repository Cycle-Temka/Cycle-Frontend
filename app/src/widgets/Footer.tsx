import React from "react";
import "../styles/Footer.css";
import footer_biker from "../assets/img/footer_biker.png";
import logo from "../assets/img/logo.png";
import smartphone from "../assets/img/smartphone.png";
import navigation from "../assets/img/navigation.png";
import mail from "../assets/img/mail.png";
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
          <div className="newsletter_form_input">
            <MyInput type="email" value="E-mail" />

            <MyButton>Подписаться</MyButton>
          </div>
          <br />
          <div className="checkbox">
            <MyInput type="checkbox" />
            <span>Согласен(на) на обработку персональных данных</span>
          </div>
        </form>
        <img className="newsletter_img" src={footer_biker} alt=""></img>
      </div>

      <div className="about">
        <div className="about_company">
          <div className="about_company_block">
            <img src={logo} alt="" className="about_company_block_img"></img>
            <span className="about_company_block_text">
              Компания World-bikes
              <br /> специализируется на продаже
              <br /> товаров для велосипедного спорта.
            </span>
          </div>

          <div className="links">
            <div className="links_block" id="lb_1">
              Каталог
              <div className="links_block_items">
                <a className="nav_item_footer" id="bicycles" href="#">
                  Велосипеды
                </a>
                <a className="nav_item_footer" id="parts" href="#">
                  Запчасти
                </a>
                <a className="nav_item_footer" id="equipment" href="#">
                  Экипировка
                </a>
                <a className="nav_item_footer" id="accessories" href="#">
                  Аксессуары
                </a>
                <a className="nav_item_footer" id="bike_racks" href="#">
                  Велостанки
                </a>
              </div>
            </div>

            <div className="links_block" id="lb_2">
              Для клиента
              <div className="links_block_items">
                <a className="nav_item_footer" id="about_us" href="#">
                  О нас
                </a>
                <a
                  className="nav_item_footer"
                  id="shipping_and_payment"
                  href="#"
                >
                  Доставка и оплата
                </a>
                <a className="nav_item_footer" id="blog" href="#">
                  Блог
                </a>
                <a className="nav_item_footer" id="contacts" href="#">
                  Контакты
                </a>
                <a className="nav_item_footer" id="bicycle_workshop" href="#">
                  Веломастерская
                </a>
                <a className="nav_item_footer" id="storage" href="#">
                  Хранение
                </a>
                <a className="nav_item_footer" id="guarantees" href="#">
                  Гарантии
                </a>
              </div>
            </div>

            <div className="links_block" id="lb_3">
              Контакты
              <div className="links_block_items">
                <div className="links_block_item">
                  <div className="links_block_item_img">
                    <img src={smartphone} alt="" />
                  </div>
                  <div>
                    <a className="nav_item_footer" id="number_1" href="#">
                      +7(495)055-75-86
                    </a>
                    <br />
                    <a className="nav_item_footer" id="number_2" href="#">
                      +7(965)142-22-99
                    </a>
                  </div>
                </div>
                <div className="links_block_item">
                  <div className="links_block_item_img">
                    <img src={navigation} alt="" />
                  </div>
                  <div>
                    <a className="nav_item_footer" id="adress" href="#">
                      г. Москва, ул. Доватора, 7/8 с1
                    </a>
                  </div>
                </div>
                <div className="links_block_item">
                  <div className="links_block_item_img">
                    <img src={mail} alt="" />
                  </div>
                  <div>
                    <a className="nav_item_footer" id="e-mail" href="#">
                      order@world-bike.ru
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="horizontal_line" />

        <div className="terms_of_use">
          <span>© 2023 WORLD BIKE</span>
          <a>Пользовательское соглашение</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

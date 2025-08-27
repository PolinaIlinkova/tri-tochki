import React, { useEffect } from "react";
import styles from "./Contacts.module.css";
import MainContainer from "../layout/MainContainer";
import Social from "../components/UI/Social";

const Contacts = () => {
  useEffect(() => {
    if (window.ymaps) {
      window.ymaps.ready(init);
    }

    function init() {
      const map = new window.ymaps.Map("map", {
        center: [52.433896, 30.949917], // замените на свои координаты
        zoom: 14,
      });

      const placemark = new window.ymaps.Placemark(
        [52.433896, 30.949917],
        {
          balloonContent: 'Студия дизайна "Три точки"',
        },
        {
          preset: "islands#icon",
          iconColor: "#e27d60",
        }
      );

      map.geoObjects.add(placemark);
    }
  }, []);

  return (
    <section className={styles.contactsSection} id="contact">
      <MainContainer>
        <div className={styles.headingSection}>
          <span className={styles.dot_line}></span>
          <h2 className={styles.heading}>Контакты</h2>
        </div>
        <div className={styles.content}>
          <div className={styles.info}>
            <p><b>Адрес:</b>Адрес: г. Гомель, ул. Владимирова, 6 <br/> <br/>С 9:00 до 18:00. Встречи по предварительной записи</p>
            <p>
              <b>Телефон:</b> <a href="tel:+375445514522">+375 (44) 551-45-22</a> <br/> <br/> Позвоните нам и мы постараемся ответить на все вопросы
            </p>
            <p>
              <b>Email:</b> <a href="mailto:hello@tritocki.ru">tochki.des@gmail.com</a> <br/> <br/> Напишите нам и ваше письмо не останется без внимания
            </p>

            <Social />
          </div>

          <div id="map" className={styles.map}></div>
        </div>
      </MainContainer>
    </section>
  );
};

export default Contacts;

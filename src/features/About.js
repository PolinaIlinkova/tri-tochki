import { useState } from "react";
import { motion } from "motion/react";
import { AnimatePresence } from "motion/react";

import React from "react";
import styles from "./About.module.css";
import photoUs from "../assets/about.jpg";
import MainContainer from "../layout/MainContainer";
import Button from "../components/UI/Button";

export default function About() {
  const [showDescription, setShowDescription] = useState(false);

  function showDescriptionFunc() {
    setShowDescription((prev) => !prev);
  }

  return (
    <section className={styles.aboutSection} id="about">
      <MainContainer>
        <div className={styles.heading_section}>
          <span className={styles.dot_line}></span>
          <h2 className={styles.heading}>О нашей студии</h2>
        </div>
        <div className={styles.textBlock}>
          <p className={styles.description}>
            «Три точки» — молодая студия дизайна интерьеров, выросшая из любви к
            продуманным пространствам и вниманию к деталям. Мы объединяем свежий
            взгляд с опытом проверенных специалистов: дизайнеров, архитекторов,
            визуализаторов и инженеров.
            <br />
            <br />
            Каждый наш проект — это не просто интерьер. Это путь: от идеи —
            через понимание потребностей клиента, к плану — в котором учтено всё
            до мелочей, и к воплощению, которым можно гордиться. <br />
            <br />
            Работаем по всей Беларуси и в приграничных регионах, оставаясь в
            диалоге с актуальными трендами, технологиями и рынком. Но самое
            главное — мы работаем для людей, которые хотят чувствовать себя дома
            — <b>действительно дома</b>.
          </p>
          <div className={styles.imageBlock}>
            <img src={photoUs} alt="О нас" className={styles.image} />
          </div>
        </div>
        <AnimatePresence>
          <motion.div className={styles.descrip_section} exit={{ opacity: 0 }}>
            {showDescription && (
              <motion.p
                className={styles.description}
                key="text"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                style={{ overflow: "hidden", marginTop: "1rem" }}
              >
                Главная задача нашей дизайн-студии – сделать процесс разработки
                дизайн-проекта и ремонта максимально комфортным и незаметным для
                вас: мы работаем, вы отдыхаете. Все встречи проводим в удобном
                для вас месте, в удобное для вас время. Создаем группу Telegram/
                Viber/ WhatsApp для дистанционного обсуждения промежуточных
                результатов работы над проектом. Перед началом всех работ мы
                просим наших клиентов пройти тест, чтобы определить ваш стиль и
                предпочтения и закрепить за вашим проектом дизайнера,
                максимально подходящего под ваши требования. Заказав
                дизайн-проект в нашей студии вы избежите разочарований и будете
                полностью довольны результатом воплощенного проекта.
              </motion.p>
            )}
            <Button
              text={showDescription ? "Скрыть" : "Показать еще"}
              onClick={showDescriptionFunc}
            />
          </motion.div>
        </AnimatePresence>
      </MainContainer>
    </section>
  );
}

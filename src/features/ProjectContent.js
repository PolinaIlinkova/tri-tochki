import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./ProjectContent.module.css";
import MainContainer from "../layout/MainContainer";

const projectItems = [
  {
    title: "Составление брифа и обмерный план",
    description: ['Обсуждение пожеланий заказчика', 'Заполнение анкеты (бриф)', 'Замеры помещения и фотофиксация'],
    time: '2-3 дня',
    video: "/video/01.mp4",
    preview: "/images/previews/01.jpg",
  },
  {
    title: "Планировочное решение",
    description: ["Разработка нескольких вариантов планировки(3-7 вариантов)",'Разработка и согласование перепланировки','Подбор оптимального варианта', 'Утверждение с заказчиком'],
    video: "/video/02.mp4",
    preview: "/images/previews/02.jpg",
    time: '7-10 дней',
  },
  {
    title: "Концепция и визуализация",
    description: ["Коллажи, референсы, подбор стилистики", '3D-визуализация интерьера', 'Составление ведомости материалов и мебели'],
    video: "/video/03.mp4",
    preview: "/images/previews/03.jpg",
    time: '10-20 дней',
  },
  {
    title: "Рабочая документация",
    description: ["Чертежи и развертки для строителей и мебели", 'Схемы электрики, сантехники, освещения', 'Ведомость материалов и спецификация', 'Предосталение проекта на бумажном и цифроом носителе', 'Помощь с подбором подрядчиков'],
    video: "/video/04.mp4",
    preview: "/images/previews/04.jpg",
    time: '10-20 дней',
  },
];

export default function ProjectContent() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className={styles.section} id="content">
      <MainContainer>
        <div className={styles.headingSection}>
          <span className={styles.dot_line}></span>
          <h2 className={styles.title}>Этапы проекта</h2>
        </div>

        <div className={styles.grid}>
          {projectItems.map((item, index) => (
            <div
              key={index}
              className={styles.card}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >

              <img
                src={item.preview}
                alt={item.title}
                className={styles.preview}
              />


              <AnimatePresence>
                {hovered === index && (
                  <motion.video
                    key={`video-${index}`}
                    className={styles.bgVideo}
                    src={item.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                  />
                )}
              </AnimatePresence>


              <div className={styles.overlay}></div>

              <div className={styles.content}>
                <h3>{item.title}</h3>
                {item.description.map((des, i) => (
                  <p key={i}>{des}</p>
                )) }
                <p className={styles.timeText}>Продолжительность: {item.time}</p>
              </div>
              
            </div>
          ))}
        </div>
      </MainContainer>
    </section>
  );
}
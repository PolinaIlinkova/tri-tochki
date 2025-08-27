import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./ProjectContent.module.css";
import MainContainer from "../layout/MainContainer";

const projectItems = [
  {
    title: "Планировочное решение",
    description: "Предоставляем до 7-ми вариантов планировочных решений",
    video: "/video/01.mp4",
    preview: "/images/previews/01.jpg",
  },
  {
    title: "2D- и 3D-визуализация",
    description: "До 3-х вариантов визуализаций для каждого помещения",
    video: "/video/02.mp4",
    preview: "/images/previews/02.jpg",
  },
  {
    title: "Строительная документация",
    description: "Планы, чертежи, развертки всех помещений, деталировка мебели",
    video: "/video/03.mp4",
    preview: "/images/previews/03.jpg",
  },
  {
    title: "Ведомость материалов",
    description: "Документ со ссылками на магазины для покупки всех материалов",
    video: "/video/04.mp4",
    preview: "/images/previews/04.jpg",
  },
];

export default function ProjectContent() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className={styles.section} id="content">
      <MainContainer>
        <div className={styles.headingSection}>
          <span className={styles.dot_line}></span>
          <h2 className={styles.title}>Содержание проекта</h2>
        </div>

        <div className={styles.grid}>
          {projectItems.map((item, index) => (
            <div
              key={index}
              className={styles.card}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Фоновая картинка */}
              <img
                src={item.preview}
                alt={item.title}
                className={styles.preview}
              />

              {/* Видео при наведении */}
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

              {/* Оверлей всегда поверх */}
              <div className={styles.overlay}></div>

              {/* Контент */}
              <div className={styles.content}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </MainContainer>
    </section>
  );
}
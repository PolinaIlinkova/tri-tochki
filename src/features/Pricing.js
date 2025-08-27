import styles from "./Pricing.module.css";
import MainContainer from "../layout/MainContainer";
import Button from "../components/UI/Button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const plans = [
  {
    title: "ТЕХНИЧЕСКИЙ",
    features: [
      "Планировочные решения (с расстановкой мебели)",
      "Документация для проведения ремонтно-отделочных работ",
    ],
  },
  {
    title: "БАЗОВЫЙ",
    features: [
      "Планировочные решения (с расстановкой мебели)",
      "Визуализация проекта в 2D",
      "Документация для проведения ремонтно-отделочных работ",
    ],
  },
  {
    title: "ПРЕМИАЛЬНЫЙ",
    features: [
      "Планировочные решения (с расстановкой мебели)",
      "Визуализация проекта в 3D",
      "Документация для проведения ремонтно-отделочных работ",
      "Ведомость отделочных материалов, мебели и техники",
    ],
  },
];

export default function Pricing() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className={styles.pricingSection} ref={ref} id="services">
      <MainContainer>
        <div className={styles.headingSection}>
          <span className={styles.dot_line}></span>
          <h2 className={styles.sectionTitle}>Тарифы</h2>
        </div>
        <div className={styles.grid}>
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: index * 0.2,
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              <div>
                <h3 className={styles.cardTitle}>{plan.title}</h3>
                <ul className={styles.features}>
                  {plan.features.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
              <a href="https://drive.google.com/uc?export=download&id=1PFdwO8hex6HbzLNV9XMYKYmjWODy8O7z" target="_blank" rel="noopener noreferrer" download>
                <Button text="загрузить пример"></Button>
              </a>
            </motion.div>
          ))}
        </div>
      </MainContainer>
    </section>
  );
}

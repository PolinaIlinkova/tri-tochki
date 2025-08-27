import React, { useState } from "react";
import styles from "./FAQ.module.css";

const faqData = [
  {
    question: "Сколько времени занимает разработка дизайна?",
    answer:
      "В среднем от 3 до 12 недель в зависимости от площади и сложности объекта, требований к проекту.",
  },
  {
    question: "Можно ли заказать только планировочное решение без визуализаций?",
    answer:
      "Да, у нас есть отдельные тарифы на разные пакеты услуг: от консультации до полного проекта",
  },
  {
    question: 'Какие документы я получу на выходе?',
    answer: "Подробный проект с планами, развертками, ведомостью материалов, а также визуализации (если они включены в тариф).",
  },
  {
    question: "Как происходит оплата?",
    answer:
      "Оплата делится на 2 части: предоплата и финальный расчет после сдачи.",
  },
  {
    question: "Можно ли вносить правки в проект?",
    answer:
      "Да, по каждому этапу у вас есть возможность корректировать до утверждения финальной версии.",
  },
  {
    question: "Можете ли вы помочь с авторским надзором?",
    answer:
      "Да, у нас есть услуга авторского сопровождения, когда мы следим за тем, чтобы строители выполняли все по проекту.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.faqContainer}>
      <div className={styles.list}>
        {faqData.map((item, index) => (
          <div key={index} className={styles.item}>
            <div
              className={styles.question}
              onClick={() => toggleAnswer(index)}
            >
              <span>{item.question}</span>
              <span className={styles.toggle}>
                {openIndex === index ? "−" : "+"}
              </span>
            </div>
            {openIndex === index && (
              <div className={styles.answer}>{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;

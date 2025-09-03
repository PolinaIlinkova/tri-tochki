import React, { useState } from "react";
import styles from "./QuizCalculator.module.css";
import MainContainer from "../layout/MainContainer";

const questions = [
  {
    id: "style",
    text: "Выберите тип помещения",
    type: "select",
    options: ["Квартира", "Коттедж/таунхаус", "Коммерческое помещение"],
  },
  {
    id: "area",
    text: "Какая площадь помещения?",
    type: "select",
    options: ["41-60 кв.м.", "61-80 кв.м.", "81-110кв.м.", "более 110 кв.м."],
  },
  {
    id: "type",
    text: "Какой тариф необходим",
    type: "select",
    options: ["Базовый", "Оптимальный", "Премиальный"],
  },
];

const TOKEN = process.env.REACT_APP_BOT_TOKEN;
const CHAT_ID = process.env.REACT_APP_CHAT_ID;

export default function QuizCalculator() {
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [phone, setPhone] = useState("");
  const [contactMethod, setContactMethod] = useState("");

  const handleAnswer = (value) => {
    const key = questions[step].id;
    setAnswers((prev) => ({ ...prev, [key]: value }));

    if (step + 1 < questions.length) {
      setStep((prev) => prev + 1);
    } else {
      setShowForm(true);
    }
  };

  const handleSubmit = async () => {
    const payload = {
      ...answers,
      phone,
      contactMethod,
      timestamp: new Date().toLocaleString("ru-RU"),
    };

    const message = `
  📐 *Новая заявка из калькулятора*:
  
  *Тип помещения:* ${payload.style}
  *Площадь:* ${payload.area}
  *Тариф:* ${payload.type}
  📞 *Телефон:* ${payload.phone}
  💬 *Связаться через:* ${payload.contactMethod}
  🕒 *Время:* ${payload.timestamp}
    `;

    try {
      await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: CHAT_ID, 
          text: message,
          parse_mode: "Markdown",
        }),
      });

      setSubmitted(true); 
      // очистка
      setStep(0);
      setAnswers({});
      setPhone("");
      setContactMethod("");
      setShowForm(false);
    } catch (error) {
      console.error("Ошибка при отправке в Telegram:", error);
      alert("Не удалось отправить данные. Попробуйте позже.");
    }
  };

  const current = questions[step];
  const progress = ((step + (showForm ? 1 : 0)) / (questions.length + 1)) * 100;

  return (
    <section className={styles.calcSection}>
      <MainContainer>
        <div className={styles.headingSection}>
          <span className={styles.dot_line}></span>
          <h2 className={styles.title}>Калькулятор</h2>
        </div>
        <div className={styles.flex}>
          <p className={styles.description}>
            Получите расчет стоимости вашего проекта за 3 клика{" "}
          </p>
          <div className={styles.container}>
            {submitted ? (
              <div>
                <h2>Спасибо за заявку!</h2>
                <p>Мы свяжемся с вами в ближайшее время</p>
              </div>
            ) : (
              <>
                <div className={styles.header}>
                  {!showForm && (
                    <>
                      <p className={styles.counter}>
                        Вопрос {step + 1} из {questions.length}
                      </p>
                      <div className={styles.progressBar}>
                        <div
                          className={styles.progress}
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </>
                  )}
                </div>

                <div className={styles.wrapper}>
                  {!showForm ? (
                    <div className={styles.step}>
                      <p>{current.text}</p>

                      {current.type === "input" && (
                        <input
                          type="text"
                          placeholder={current.placeholder}
                          onBlur={(e) => handleAnswer(e.target.value)}
                        />
                      )}

                      {current.type === "select" && (
                        <div className={styles.options}>
                          {current.options.map((option) => (
                            <button
                              key={option}
                              onClick={() => handleAnswer(option)}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className={styles.form}>
                      <p>Укажите номер телефона для отправки расчета:</p>
                      <input
                        type="tel"
                        placeholder="+375 __ ___ __ __"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />

                      <p>Куда вам удобнее получить расчёт?</p>
                      <div className={styles.options}>
                        {["Telegram", "WhatsApp", "Звонок"].map((option) => (
                          <button
                            key={option}
                            className={
                              contactMethod === option ? styles.selected : ""
                            }
                            onClick={() => setContactMethod(option)}
                          >
                            {option}
                          </button>
                        ))}
                      </div>

                      <button
                        className={styles.submit}
                        onClick={handleSubmit}
                        disabled={!phone || !contactMethod}
                      >
                        Отправить
                      </button>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </MainContainer>
    </section>
  );
}

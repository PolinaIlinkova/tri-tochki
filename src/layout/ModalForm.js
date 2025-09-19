import React, { useState } from "react";
import styles from "./ModalForm.module.css";
import Button from "../components/UI/Button";
import CustomSelect from "../components/UI/Select";

const TOKEN = process.env.REACT_APP_BOT_TOKEN;
const CHAT_ID = process.env.REACT_APP_CHAT_ID;

export default function ModalForm({ onClose, price }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    social: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [selected, setSelected] = useState(null);

  const options = [
    { label: "Viber", color: "#7360f2", value: "viber" },
    { label: "Telegram", color: "#229ed9", value: "telegram" },
    { label: "WhatsApp", color: "#25d366", value: "whatsapp" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validatePhone = (phone) => {
    const digits = phone.replace(/\D/g, ""); // оставляем только цифры
    return digits.length >= 9 && digits.length <= 15; // простая проверка
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validatePhone(formData.phone)) {
      alert("Введите корректный номер телефона");
      return;
    }

    let message = "";

    if (price) {
      // форма прайс-листа
      message = `
  💬 Новая заявка на прайс-лист
  📞 Телефон: ${formData.phone}
  📲 Куда отправить: ${selected ? selected.label : "не выбрано"}
      `;
    } else {
      // обычная форма
      message = `
  💬 Новая заявка с сайта
  👤 Имя: ${formData.name}
  📞 Телефон: ${formData.phone}
      `;
    }
    try {
      await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
        }),
      });

      setSubmitted(true);
    } catch (error) {
      console.error("Ошибка при отправке:", error);
    }
  };

  if (submitted) {
    return (
      <div className={styles.success}>
        <p>✅ Спасибо! Мы свяжемся с вами в ближайшее время.</p>
        <Button text="Закрыть" onClick={onClose} />
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {price ? (
        <>
          {" "}
          <label>
            Телефон
            <input
              type="tel"
              name="phone"
              placeholder="+375 (XX) XXX-XX-XX"
              value={formData.phone}
              required
              onChange={handleChange}
            />
          </label>
          <CustomSelect
            options={options}
            value={selected}
            onChange={setSelected}
          ></CustomSelect>
          <button type="submit" className={styles.submitBtn}>
            Отправить
          </button>{" "}
        </>
      ) : (
        <>
          {" "}
          <label>
            Ваше имя
            <input
              type="text"
              name="name"
              value={formData.name}
              required
              onChange={handleChange}
            />
          </label>
          <label>
            Телефон для связи
            <input
              type="tel"
              name="phone"
              placeholder="+375 (XX) XXX-XX-XX"
              value={formData.phone}
              required
              onChange={handleChange}
            />
          </label>
          <button type="submit" className={styles.submitBtn}>
            Отправить
          </button>{" "}
        </>
      )}
    </form>
  );
}

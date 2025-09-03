import React, { useState } from "react";
import styles from "./ModalForm.module.css";
import Button from "../components/UI/Button";
import PhoneInputField from "../components/UI/PhoneInputField";

const TELEGRAM_BOT_TOKEN = "8452053897:AAElF_nbUIaJS1f8Oz57mAWj-YFi4bzuvEI";
const TELEGRAM_CHAT_ID = "-4937510618"; 

export default function ModalForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    area: "",
    projectType: "",
    phone: "",
  });
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("by");

  const validatePhone = () => {
    const digits = phone.replace(/\D/g, "");

    if (country === "by") {
      // Беларусь: код +375 (4 символа), дальше 9 цифр → всего 12–13 символов
      return digits.length === 12 && digits.startsWith("375");
    }

    if (country === "ru") {
      // Россия: код +7 (1 символ), дальше 10 цифр → всего 11 символов
      return digits.length === 11 && digits.startsWith("7");
    }

    // базовая проверка для других стран: хотя бы 10 цифр
    return digits.length >= 10;
  };

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validatePhone()) {
      alert("Введите корректный номер телефона");
      return;
    }

    const message = `
💬 Новая заявка из формы:
👤 Имя: ${formData.name}
📐 Площадь: ${formData.area}
📁 Тип проекта: ${formData.projectType}
📞 Телефон: ${formData.phone}
    `;

    try {
      await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
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
        <Button text="Закрыть" onClick={onClose}/>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
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
        Площадь помещения
        <input
          type="text"
          name="area"
          value={formData.area}
          required
          onChange={handleChange}
        />
      </label>

      <label>
        Тип проекта
        <select
          name="projectType"
          value={formData.projectType}
          required
          onChange={handleChange}
        >
          <option value="">Выберите тип</option>
          <option value="Технический для ремонта">Технический для ремонта</option>
          <option value="Полный с 3D визуализацией">Полный с 3D визуализацией</option>
          <option value="Консультация">Консультация</option>
        </select>
      </label>

      <label>
        Телефон для связи
        <PhoneInputField value={phone} onChange={setPhone} onCountryChange={setCountry} styles={{width:'100%', background: 'transparent'}}/>
      </label>

      <button type="submit" className={styles.submitBtn}>
        Отправить расчет
      </button>
    </form>
  );
}
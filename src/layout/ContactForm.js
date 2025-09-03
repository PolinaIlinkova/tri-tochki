import React, { useState } from 'react';
import styles from './ContactForm.module.css';
import PhoneInputField from '../components/UI/PhoneInputField';

const TOKEN = '8452053897:AAElF_nbUIaJS1f8Oz57mAWj-YFi4bzuvEI';
const CHAT_ID = '-4937510618';

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validatePhone()) {
      alert("Введите корректный номер телефона");
      return;
    }

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const text = `
📩 Заявка из формы "вопрос":
👤 Имя: ${data.name}
📞 Телефон: ${phone}
💬 Комментарий: ${data.message || '-'}
    `;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${TOKEN}/sendMessage`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text,
            parse_mode: 'HTML',
          }),
        }
      );

      const result = await response.json();

      if (result.ok) {
        setSubmitted(true);
      } else {
        alert('Ошибка при отправке в Telegram');
      }
    } catch (err) {
      console.error(err);
      alert('Ошибка при отправке формы');
    }
  };

  return (
    <div className={styles.contactForm}>
      {submitted ? (
        <div className={styles.thankYou}>
          <h3>Спасибо за вашу заявку!</h3>
          <p>Мы свяжемся с вами в ближайшее время.</p>
        </div>
      ) : (
        <>
          <h3>Остались вопросы?</h3>
          <p>Закажите обратный звонок и мы свяжемся с вами, чтобы ответить на все ваши вопросы по дизайн-проекту и принципу работы студии</p>
          <form onSubmit={handleSubmit} className={styles.form}>
            <input type="text" name="name" placeholder="Ваше имя" required />
            <PhoneInputField value={phone} onChange={setPhone} onCountryChange={setCountry}/>
            <textarea
              name="message"
              placeholder="Комментарий (необязательно)"
              rows="3"
            />
            <button type="submit">Отправить</button>
          </form>
        </>
      )}
    </div>
  );
}

export default ContactForm;
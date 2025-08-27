import React, { useState } from 'react';
import styles from './ContactForm.module.css';

const TOKEN = '8452053897:AAElF_nbUIaJS1f8Oz57mAWj-YFi4bzuvEI';
const CHAT_ID = '-4937510618';

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const text = `
📩 Новая заявка с сайта:
👤 Имя: ${data.name}
📞 Телефон: ${data.phone}
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
            <input type="tel" name="phone" placeholder="Телефон" required />
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
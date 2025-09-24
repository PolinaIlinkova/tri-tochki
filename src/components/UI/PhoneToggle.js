import React, { useState } from "react";
import ReactDOM from "react-dom";
import  phone from "../../assets/telephone.svg"; // иконка, можно заменить на svg/png
import styles from "./PhoneToggle.module.css";

export default function PhoneToggle() {
  const [visible, setVisible] = useState(false);

  const phoneBlock = (
    <div className={styles.phoneContainer}>
      <button
        className={styles.phoneBtn}
        onClick={() => setVisible((prev) => !prev)}
      >
        <img src={phone} alt="phone" className={styles.phoneImg}/>
      </button>

      {visible && (
        <a href="tel:+375291234567" className={styles.phoneNumber}>
          +375 (29) 123-45-67
        </a>
      )}
    </div>
  );

  // Рендерим в body, чтобы ничего не перекрывало
  return ReactDOM.createPortal(phoneBlock, document.body);
}
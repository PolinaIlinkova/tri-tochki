import React, { useState } from "react";
import styles from "./Select.module.css";

export default function CustomSelect({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    onChange(option); // передаём выбранный объект наверх
    setIsOpen(false);
  };

  return (
    <div className={styles.customSelect}>
        <p className={styles.title}>Куда отправить прайс-лист?</p>
      <div
        className={styles.selectTrigger}
        style={{ color: value?.color }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {value ? value.label : "Выберите..."}
      </div>

      {isOpen && (
        <ul className={styles.options}>
          {options.map((opt) => (
            <li
              key={opt.label}
              style={{ color: opt.color }}
              onClick={() => handleSelect(opt)}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
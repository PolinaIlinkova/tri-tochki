import styles from './Button.module.css';

const Button = ({ text = 'Получить расчёт', onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
import classNames from "classnames/bind";
import styles from "./Social.module.css";

import telegramIcon from "../../assets/telegram.svg";
import whatsappIcon from "../../assets/whatsapp.svg";
import instagramIcon from "../../assets/instagram.svg";

const cx = classNames.bind(styles);

const Social = ({white}) => {
    const className = cx({
        socials: true,
        white: white
    })

  return (
    <div className={className}>
      <a href="https://t.me/Tri_tochki_studio_bot" target="_blank" rel="noopener noreferrer">
        <img src={telegramIcon} alt="Telegram" />
      </a>
      <a href="viber://chat?number=%2B375445514522" target="_blank" rel="noopener noreferrer">
        <img src={whatsappIcon} alt="Viber" />
      </a>
      <a
        href="https://instagram.com/tri_tochki.by"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={instagramIcon} alt="Instagram" />
      </a>
    </div>
  );
};

export default Social;
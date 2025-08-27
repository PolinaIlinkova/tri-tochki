
import classNames from "classnames/bind";
import styles from "./Logo.module.css";
import logo from "../../assets/logo.svg";

const cx = classNames.bind(styles)

const Logo = ({dark }) => {

    const className = cx({
        logoN: true,
        dark: dark,
    });

  return (
    <div className={className}>
      <img src={logo} alt="Логотип" className={styles.logo} />
      <h2 className={styles.heading}>Три <br/>точки</h2>
    </div>
  );
};

export default Logo;

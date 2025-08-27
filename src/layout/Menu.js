
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import classNames from "classnames/bind"; 
import styles from "./Menu.module.css";

const cx = classNames.bind(styles);

const Menu = ({ dark, burgerIsActive, closeMenu }) => {
  const { pathname } = useLocation();
  const onHomePage = pathname === "/";

  const className = cx({
    nav: true,
    dark: dark,
    burgerIsActive: burgerIsActive,
  });

  return (
    <nav className={className}>
      <HashLink smooth to={`${onHomePage ? "" : "/"}#about`} onClick={closeMenu}>
        О нас
      </HashLink>
      <HashLink smooth to={`${onHomePage ? "" : "/"}#portfolio`} onClick={closeMenu}>
        Портфолио
      </HashLink>
      <HashLink smooth to={`${onHomePage ? "" : "/"}#services`} onClick={closeMenu}>
        Тарифы
      </HashLink>
      <HashLink smooth to={`${onHomePage ? "" : "/"}#faq`} onClick={closeMenu}>
        FAQ
      </HashLink>
      <HashLink smooth to={`${onHomePage ? "" : "/"}#contact`} onClick={closeMenu}>
        Контакты
      </HashLink>
    </nav>
  );
};

export default Menu;
import { useState } from "react";
import Logo from "../components/UI/Logo";
import styles from "./Header.module.css";
import Menu from "./Menu";
import PhoneToggle from "../components/UI/PhoneToggle";

const Header = ({ dark }) => {
  const [isActive, setIsActive] = useState(false);

  function toggleMenu() {
    setIsActive((prev) => !prev);
  }

  function closeMenu() {
    setIsActive(false);
  }

  return (
    <>
      {" "}
      <header className={styles.header}>
        <div className={styles.logoWrapper} onClick={toggleMenu}>
          <Logo dark={dark} />
        </div>

        <Menu dark={dark} burgerIsActive={isActive} closeMenu={closeMenu} />
      </header>
      <PhoneToggle />
    </>
  );
};

export default Header;

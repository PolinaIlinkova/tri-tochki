import Header from "../layout/Header";
import styles from "./Hero.module.css";
import Button from "../components/UI/Button";
import MainContainer from "../layout/MainContainer";
import Modal from "../components/UI/Modal";
import { useState } from "react";
import ModalForm from "../layout/ModalForm";

const Hero = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }
  return (
    <section className={styles.hero}>
      <MainContainer>
        <Header />
        <Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
          <ModalForm onClose={() => setModalIsOpen(false)} />
        </Modal>
        <div className={styles.content}>
          <div className={styles.titles}>
            <div className={styles.titled}>
              <h1>Идея </h1>
            </div>
            <div className={styles.titled}>
              <h1>План</h1>
            </div>
            <div className={styles.titled}>
              <h1>Воплощение</h1>
            </div>
          </div>
          <div className={styles.center}>
            <p className={styles.text1}> От концепции — к реальности.</p>
            <p className={styles.text2}>
              <b>Три точки</b> - студия дизайна и проектировки в Гомеле
            </p>
            <Button onClick={openModal} />
          </div>
        </div>
      </MainContainer>
    </section>
  );
};

export default Hero;

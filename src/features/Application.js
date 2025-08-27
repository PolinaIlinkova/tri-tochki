import MainContainer from "../layout/MainContainer";
import styles from "./Application.module.css";
import FAQ from "../layout/FAQ";
import ContactForm from "../layout/ContactForm";

const Application = () => {
  return (
    <section className={styles.faqSection} id="faq">
      <MainContainer>
        <div className={styles.headingSection}>
          <span className={styles.dot_line}></span>
          <h3 className={styles.title}>Вопрос - ответ</h3>
        </div>
        <div className={styles.info}>
          <FAQ />
          <ContactForm />
        </div>
      </MainContainer>
    </section>
  );
};

export default Application;

import styles from './Footer.module.css'
import MainContainer from './MainContainer';
import Menu from './Menu';
import Social from '../components/UI/Social';

const Footer = () => {
    return (
        <section className={styles.footer}>
            <MainContainer>
                <div className={styles.flex}>
                    <Menu />
                    <Social white={true}/>
                    <div className={styles.text}>
                        <p>ООО «Три Точки» <br />УНП 491394316<br /> +375445514522</p>
                    </div>
                </div>
            </MainContainer>
        </section>
    )
}

export default Footer
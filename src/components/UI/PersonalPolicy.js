import styles from './PersonalPolicy.module.css'

export default function PersonalPolicy () {
    return <p className={styles.persText}>
Нажимая на кнопку, вы даете согласие на обработку 
<a
  href="/files/policy.pdf"
  className={styles.persLink}
  target="_blank"
  rel="noopener noreferrer"
>
   персональных данных
</a>
</p>
}
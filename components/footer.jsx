import styles from 'styles/components/footer.module.scss'
import personal from 'data/personal'

export default function Footer() {
  const { email } = personal

  return (
    <div className={styles.footer_wrap}>
      <span>Say hello :)</span>
      <a href={`mailto:${email}`}>{email}</a>
    </div>
  )
}

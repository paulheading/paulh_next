import styles from 'styles/components/footer.module.scss'
import personal from 'data/personal'

export default function Footer() {
  const { email } = personal

  const linkProps = {
    href: `mailto:${email}`,
    className: styles.link,
  }

  return (
    <div className={styles.footer_wrap}>
      <span>Say hello :)</span>
      <a {...linkProps}>{email}</a>
    </div>
  )
}

import styles from 'styles/components/form/success.module.scss'

function FormSuccess() {
  return (
    <div className={styles.container}>
      <div className={styles.confetti}>🎉</div>
      <div className={styles.title}>Success!</div>
      <p>
        Thanks for your message,
        <br /> I&apos;ll be in touch soon :)
      </p>
    </div>
  )
}

export default FormSuccess

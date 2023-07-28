import styles from 'styles/components/form/email.module.scss'

function FormEmail(props) {
  const { children, placeholder } = props

  return (
    <div className={styles.row}>
      <div className={styles.label}>{children}</div>
      <div className={styles.tag_wrap}>
        <div className={styles.tag}>{placeholder}</div>
      </div>
    </div>
  )
}

export default FormEmail

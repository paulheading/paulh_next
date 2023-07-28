import styles from 'styles/components/form/submit.module.scss'

function FormSubmit(props) {
  const { children } = props

  return (
    <div className={styles.row}>
      <button className={styles.button}>{children}</button>
    </div>
  )
}

export default FormSubmit

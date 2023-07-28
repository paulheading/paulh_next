import styles from 'styles/components/form/submit.module.scss'

function FormSubmit(props) {
  const { children } = props

  const buttonProps = {
    className: styles.button,
    id: 'submit',
  }

  return (
    <div className={styles.row}>
      <button {...buttonProps}>{children}</button>
    </div>
  )
}

export default FormSubmit

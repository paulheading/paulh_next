import { Alert } from 'components/contact'
import { useEffect } from 'react'
import styles from 'styles/components/contact.module.scss'

function Row({ label, type = 'text', register, required = false, pattern = null, placeholder, errors }) {
  const name = label.toLowerCase()
  const error = errors[name]

  function className() {
    switch (type) {
      case 'textarea':
        return styles.textarea
      default:
        return styles.input
    }
  }

  const containerProps = {
    className: styles.row,
    'data-type': type,
  }

  const contentProps = {
    ...register(name, { required, pattern }),
    type: type !== 'textarea' ? type : null,
    className: className(),
    placeholder,
    id: name,
    name,
  }

  function printContent() {
    if (type === 'text') {
      return (
        <div className={styles.row_content}>
          <label htmlFor={name}>{label}</label>
          <input {...contentProps} />
        </div>
      )
    }
    if (type === 'textarea') return <textarea {...contentProps} />
  }

  // Please fill in your email address

  useEffect(() => {
    if (!errors[name]) return
    console.log(errors[name])
  })

  return (
    <div {...containerProps}>
      {printContent()}
      {error && (
        <div className={styles.error_row}>
          <Alert className={styles.error_row_content}>{error.message}</Alert>
        </div>
      )}
    </div>
  )
}

export default Row

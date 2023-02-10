import { Fragment } from 'react'
import { Alert } from 'components/contact'
import styles from 'styles/components/contact.module.scss'

function Row({ label, type = 'text', register, required = false, pattern = null, placeholder, errors }) {
  const name = label.toLowerCase()

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

  return (
    <div {...containerProps}>
      {type === 'text' && (
        <Fragment>
          <label htmlFor={name}>{label}</label>
          <input {...contentProps} />
        </Fragment>
      )}
      {type === 'textarea' && <textarea {...contentProps} />}
      {errors[name] && <Alert>error!</Alert>}
    </div>
  )
}

export default Row

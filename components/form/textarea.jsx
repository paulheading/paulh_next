import styles from 'styles/components/form/textarea.module.scss'

import FormAlert from 'components/form/alert'

function FormTextArea(props) {
  const { children, name, required = false } = props

  const placeholder = name.charAt(0).toUpperCase() + name.slice(1)

  const labelProps = {
    className: styles.label,
    htmlFor: name,
    hidden: true,
  }

  const textareaProps = {
    className: styles.textarea,
    placeholder,
    required,
    id: name,
    name,
  }

  const alertProps = {
    className: styles.alert,
    'aria-live': 'polite',
    id: name + '_error',
  }

  return (
    <div className={styles.row}>
      <label {...labelProps}>{children}</label>
      <textarea {...textareaProps} />
      <FormAlert {...alertProps} />
    </div>
  )
}

export default FormTextArea

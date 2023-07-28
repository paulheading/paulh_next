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
    'aria-live': 'polite',
    id: name + '_error',
  }

  return (
    <div>
      <label {...labelProps}>{children}</label>
      <textarea {...textareaProps} minLength={1} />
      <FormAlert {...alertProps} />
    </div>
  )
}

export default FormTextArea

import styles from 'styles/components/form/textarea.module.scss'

function FormTextArea(props) {
  const { children, name } = props

  const labelProps = {
    className: styles.label,
    htmlFor: name,
  }

  const textareaProps = {
    className: styles.textarea,
    id: name,
    name,
  }

  return (
    <div>
      <label {...labelProps}>{children}</label>
      <textarea {...textareaProps} />
    </div>
  )
}

export default FormTextArea

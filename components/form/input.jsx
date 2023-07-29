import styles from 'styles/components/form/input.module.scss'

import FormAlert from 'components/form/alert'

function FormInput(props) {
  const { children, name, placeholder, type, required = false, minLength = null } = props

  const labelProps = {
    className: styles.label,
    htmlFor: name,
  }

  const inputProps = {
    minLength: minLength ? minLength : null,
    className: styles.input,
    placeholder,
    required,
    id: name,
    name,
    type,
  }

  const alertProps = {
    className: styles.alert,
    'aria-live': 'polite',
    id: name + '_error',
  }

  function rowStyles() {
    var result = styles.row
    if (styles[name]) result += ' ' + styles[name]
    return result
  }

  return (
    <div className={rowStyles()}>
      <label {...labelProps}>{children}</label>
      <input {...inputProps} />
      <FormAlert {...alertProps} />
    </div>
  )
}

export default FormInput

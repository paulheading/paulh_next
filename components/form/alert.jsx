import styles from 'styles/components/form/alert.module.scss'

function FormAlert(props) {
  function styleContainer() {
    var result = styles.alert
    if (props.className) result += ' ' + props.className
    return result
  }

  const alertProps = {
    ...props,
    className: styleContainer(),
  }

  return <div {...alertProps} />
}

export default FormAlert

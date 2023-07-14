import styles from 'styles/components/page/label.module.scss'

function Label({ color, children, size = 'sm', variant = 'solid' }) {
  function labelStyles() {
    var result = styles[variant + '_label']
    if (size) result += ' ' + styles[size]
    if (color) result += ' ' + styles[color]
    return result
  }

  return <div className={labelStyles()}>{children}</div>
}

export default Label

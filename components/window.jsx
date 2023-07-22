import styles from 'styles/components/window.module.scss'
import Wrap from 'components/wrap'

function Topbar(props) {
  const { close, size } = props

  function topbarStyles() {
    var result = styles.topbar
    if (size) result += ' ' + styles[size]
    return result
  }

  function closeStyles() {
    var result = styles.button
    result += ' ' + styles.close
    if (size) result += ' ' + styles[size]
    return result
  }

  const closeProps = {
    className: closeStyles(),
    onClick: () => close(),
  }

  return (
    <div className={topbarStyles()}>
      <button {...closeProps} />
    </div>
  )
}

function Window(props) {
  const { children, className, close, size } = props

  function wrapStyles() {
    var result = styles.wrap
    if (className) result += ' ' + className
    return result
  }

  const topbarProps = {
    close,
    size,
  }

  return (
    <Wrap className={wrapStyles()}>
      <Topbar {...topbarProps} />
      <div className={styles.content}>{children}</div>
    </Wrap>
  )
}

export default Window

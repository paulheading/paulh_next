import styles from 'styles/components/window.module.scss'
import Wrap from 'components/wrap'

function Topbar(props) {
  const { close } = props

  const closeProps = {
    className: styles.button + ' ' + styles.close,
    onClick: () => close(),
  }
  return (
    <div className={styles.topbar}>
      <button {...closeProps} />
      {/* <div className={styles.button + ' ' + styles.minimise} /> */}
    </div>
  )
}

function Window(props) {
  const { children, className, close } = props

  function containerStyles() {
    var result = styles.container
    if (className) result += ' ' + className
    return result
  }

  return (
    <div className={containerStyles()}>
      <Wrap className={styles.wrap}>
        <Topbar close={close} />
        <div className={styles.content}>{children}</div>
      </Wrap>
    </div>
  )
}

export default Window

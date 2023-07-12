import styles from 'styles/components/page/row.module.scss'

function Row({ children, columns, className, mode }) {
  function wrapStyles() {
    let wrap = styles.wrap

    if (columns == 2) wrap = wrap + ' ' + styles.double
    if (mode) wrap = wrap + ' ' + styles[mode + '_mode']
    if (className) wrap = wrap + ' ' + className

    return wrap
  }

  return (
    <div className={styles.container}>
      <div className={wrapStyles()}>{children}</div>
    </div>
  )
}

export default Row

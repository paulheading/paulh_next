import styles from 'styles/components/page/row.module.scss'

function Row({ children, columns, align }) {
  function wrapStyles() {
    let wrap = styles.wrap
    if (align === 'center') wrap = `${wrap} ${styles.center}`
    if (columns === 2) return `${styles.double} ${wrap}`
    return wrap
  }

  return (
    <div className={styles.container}>
      <div className={wrapStyles()}>{children}</div>
    </div>
  )
}

export default Row

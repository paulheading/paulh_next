import styles from 'styles/components/page/row/title.module.scss'

function RowTitle({ children, className, mode }) {
  function titleStyles() {
    var title = styles.title
    if (className) title = title + ' ' + className
    if (mode) title = title + ' ' + styles[mode + '_mode']
    return title
  }
  return (
    <div className={titleStyles()}>
      <h3>{children}</h3>
    </div>
  )
}

export default RowTitle

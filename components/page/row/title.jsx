import styles from 'styles/components/page/row/title.module.scss'

function RowTitle({ children }) {
  return (
    <div className={styles.title_wrap}>
      <h3>{children}</h3>
    </div>
  )
}

export default RowTitle

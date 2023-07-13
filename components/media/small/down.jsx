import styles from 'styles/components/media.module.scss'

function SmallDown(props) {
  const { children } = props
  return <span className={styles.small_down}>{children}</span>
}

export default SmallDown

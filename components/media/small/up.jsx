import styles from 'styles/components/media.module.scss'

function SmallUp(props) {
  const { children } = props
  return <span className={styles.small_up}>{children}</span>
}

export default SmallUp

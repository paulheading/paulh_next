import styles from 'styles/components/wrap.module.scss'

function Wrap({ className, children }) {
  const containerClasses = `${styles.container} ${className}`
  return <div className={containerClasses}>{children}</div>
}

export default Wrap

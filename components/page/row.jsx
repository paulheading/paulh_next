import styles from 'styles/components/page/row.module.scss'

function Row({ children, override, alignItems }) {
  const containerProps = {
    className: styleContainer(),
    style: alignItems && { alignItems },
  }

  function styleContainer() {
    const container = styles.container
    const length = override ? override : children.length

    switch (length) {
      case 3:
        return `${styles.triple} ${container}`
      case 2:
        return `${styles.double} ${container}`
      default:
        return container
    }
  }

  return <div {...containerProps}>{children}</div>
}

export default Row

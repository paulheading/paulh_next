import styles from 'styles/components/page/row/grid.module.scss'
import RowButton from 'components/page/row/button'

function RowGrid({ controls, children, length, maxProject, setProjectRange }) {
  const prevProps = {
    className: styles.prev_button,
    onClick: () => setProjectRange(maxProject - 1),
    active: maxProject > 3,
  }

  const nextProps = {
    className: styles.next_button,
    onClick: () => setProjectRange(maxProject + 1),
    active: length > maxProject,
  }

  return (
    <div className={styles.container}>
      {controls && <RowButton {...prevProps}>prev</RowButton>}
      <div className={styles.wrap}>{children}</div>
      {controls && <RowButton {...nextProps}>next</RowButton>}
    </div>
  )
}

export default RowGrid

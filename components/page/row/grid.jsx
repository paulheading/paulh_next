import styles from 'styles/components/page/row/grid.module.scss'
import RowButton from 'components/page/row/button'
import PrevIcon from 'icons/prev'
import NextIcon from 'icons/next'

function RowGrid({ controls, children, length, max, setPageRange, page, style }) {
  const wrapProps = {
    className: styles.wrap,
    style: style ? style : null,
  }

  const prevProps = {
    className: styles.prev_button,
    onClick: () => setPageRange(max - 1),
    active: max > page,
  }

  const nextProps = {
    className: styles.next_button,
    onClick: () => setPageRange(max + 1),
    active: length > max,
  }

  return (
    <div className={styles.container}>
      {controls && (
        <RowButton {...prevProps}>
          <PrevIcon />
        </RowButton>
      )}
      <div {...wrapProps}>{children}</div>
      {controls && (
        <RowButton {...nextProps}>
          <NextIcon />
        </RowButton>
      )}
    </div>
  )
}

export default RowGrid

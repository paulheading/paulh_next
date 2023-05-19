import styles from 'styles/components/desktop/window/trello/footer.module.scss'
import PrevIcon from 'icons/prev'
import NextIcon from 'icons/next'

function TrelloButton({ active, children, className, onClick }) {
  if (!active) return

  return (
    <div className={className}>
      <button onClick={onClick}>{children}</button>
    </div>
  )
}

function TrelloFooter({ className, setPageRange, max, length, page, controls }) {
  const prevProps = {
    onClick: () => setPageRange(max - page),
    className: styles.prev_button,
    active: max > page,
  }

  const nextProps = {
    onClick: () => setPageRange(max + page),
    className: styles.next_button,
    active: length > max,
  }

  return (
    <footer className={className}>
      {controls && (
        <div>
          <div>
            <TrelloButton {...prevProps}>
              <PrevIcon />
            </TrelloButton>
          </div>
          <div>
            {max / page} of {length / page}
          </div>
          <div>
            <TrelloButton {...nextProps}>
              <NextIcon />
            </TrelloButton>
          </div>
        </div>
      )}
    </footer>
  )
}

export default TrelloFooter

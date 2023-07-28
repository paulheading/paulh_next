import styles from 'styles/components/desktop/window/trello/footer.module.scss'

import PrevIcon from 'icons/prev'
import NextIcon from 'icons/next'
import Button from 'components/button'

function TrelloButton({ active, children, className, onClick, title }) {
  if (!active) return

  const buttonProps = {
    onClick,
    title,
  }

  return (
    <div className={className}>
      <Button {...buttonProps}>{children}</Button>
    </div>
  )
}

function TrelloFooter({ className, setPageRange, max, length, page, controls }) {
  const prevProps = {
    onClick: () => setPageRange(max - page),
    className: styles.prev_button,
    title: 'previous projects page',
    active: max > page,
  }

  const nextProps = {
    onClick: () => setPageRange(max + page),
    className: styles.next_button,
    title: 'next projects page',
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
            {max / page} of {Math.ceil(length / page)}
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

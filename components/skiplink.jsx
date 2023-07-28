import { forwardRef } from 'react'
import styles from 'styles/components/skiplink.module.scss'

// @note: Don't use use Next/Link for this

const SkipLink = forwardRef((props, ref) => {
  const { href, children } = props
  const linkProps = {
    className: styles.skiplink,
    href,
    ref,
  }

  return <a {...linkProps}>{children}</a>
})

SkipLink.displayName = 'SkipLink'

export default SkipLink

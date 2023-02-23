import { forwardRef } from 'react'
import styles from 'styles/components/skiplink.module.scss'

// DONT USE NEXT/LINK FOR THIS

const SkipLink = forwardRef(({ href, children }, ref) => {
  const linkProps = {
    className: styles.skiplink,
    href,
    ref,
  }

  return <a {...linkProps}>{children}</a>
})

export default SkipLink

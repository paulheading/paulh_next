import styles from 'styles/components/skiplink.module.scss'
import Link from 'next/link'

function SkipLink({ href, children }) {
  const linkProps = {
    className: styles.skiplink,
    href,
  }
  return <Link {...linkProps}>{children}</Link>
}

export default SkipLink

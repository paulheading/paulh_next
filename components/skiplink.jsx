import styles from 'styles/components/skiplink.module.scss'

// DONT USE NEXT/LINK FOR THIS

function SkipLink({ href, children }) {
  const linkProps = {
    className: styles.skiplink,
    href,
  }

  return <a {...linkProps}>{children}</a>
}

export default SkipLink

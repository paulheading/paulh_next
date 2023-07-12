import styles from 'styles/components/page.module.scss'
import Wrap from 'components/wrap'

function Page(props) {
  const { children, className } = props

  function wrapStyles() {
    var wrap = styles.wrap
    if (className) wrap = wrap + ' ' + className
    return wrap
  }

  return <Wrap className={wrapStyles()}>{children}</Wrap>
}

export default Page

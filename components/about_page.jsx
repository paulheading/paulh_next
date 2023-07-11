import styles from 'styles/components/page.module.scss'
import Wrap from 'components/wrap'

function Page(props) {
  const { children } = props

  return <Wrap className={styles.wrap}>{children}</Wrap>
}

export default Page

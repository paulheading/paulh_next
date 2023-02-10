import styles from 'styles/components/404/content.module.scss'
import { CreateLink } from 'components/marquee'
import Wrap from 'components/wrap'

function Content() {
  const linkProps = {
    className: styles.link,
    href: 'mailto:hello@paulh.biz',
  }
  return (
    <div className={styles.container}>
      <Wrap>
        <h1 className={styles.title}>Page Not Found 🤬</h1>
        <h3>
          <CreateLink {...linkProps}>where da page go?</CreateLink>
        </h3>
      </Wrap>
    </div>
  )
}

export default Content

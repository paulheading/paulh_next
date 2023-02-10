import styles from 'styles/components/about/content.module.scss'
import Wrap from 'components/wrap'
import { find } from 'scripts/helpers'
import parse from 'html-react-parser'

function Content({ pages }) {
  const about = find.by_name(pages, 'About')

  return (
    <div className={styles.container}>
      <Wrap>
        <h1 className={styles.title}>{about.name}</h1>
        <div className={styles.copy}>{parse(about.desc)}</div>
      </Wrap>
    </div>
  )
}

export default Content

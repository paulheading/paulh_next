import styles from 'styles/components/about/content.module.scss'
import Wrap from 'components/wrap'

function Content() {
  return (
    <div className={styles.container}>
      <Wrap>
        <h1 className={styles.title}>About</h1>
        <div className={styles.copy}>
          <p>
            Hi 👋 I&apos;ve been a Full Stack Designer since Nov 2019. I work in the <strong>Digital Products</strong> team at the <a href="https://barbican.org.uk">Barbican</a> and write javascript for modern front-end frameworks.
          </p>
          <p>
            Before this, I was a <a href="https://www.creativelivesinprogress.com/article/paul-heading">Designer</a> 👨‍🎨 in the Barbican <a href="https://www.creativelivesinprogress.com/article/barbican">Design Team</a>.
          </p>
        </div>
      </Wrap>
    </div>
  )
}

export default Content

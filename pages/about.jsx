import styles from 'styles/pages/about.module.scss'
import Layout from 'layouts/main'
import { getLayoutData } from 'scripts'
import Content from 'components/content'
import Wrap from 'components/wrap'
import { about as head } from 'data/seo'

function About(props) {
  const layoutProps = {
    ...props,
    head,
  }
  return (
    <Layout {...layoutProps}>
      <Content>
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
      </Content>
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      ...(await getLayoutData()),
    },
  }
}

export default About

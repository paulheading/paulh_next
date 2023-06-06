import styles from 'styles/pages/about.module.scss'
import Layout from 'layouts/main'
import { getLayoutData } from 'scripts'
import Content from 'components/content'
import Wrap from 'components/wrap'
import { Fragment } from 'react'
import ReactMarkdown from 'react-markdown'

function About(props) {
  const { markdown } = props

  return (
    <Fragment>
      <Content>
        <Wrap>
          <h1 className={styles.title}>About</h1>
          <div className={styles.copy}>
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </div>
        </Wrap>
      </Content>
      <Layout {...props} />
    </Fragment>
  )
}

export async function getStaticProps() {
  const markdown = await import(`../markdown/about.md`)

  return {
    props: {
      ...(await getLayoutData()),
      markdown: markdown.default,
    },
  }
}

export default About

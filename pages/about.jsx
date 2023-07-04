import styles from 'styles/pages/about.module.scss'
import { getLayoutData } from 'scripts'
import { Fragment } from 'react'
import ReactMarkdown from 'react-markdown'

import Layout from 'layouts/main'
import Content from 'components/content'
import Wrap from 'components/wrap'

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
  const [markdown, layout] = await Promise.all([import(`markdown/about.md`), getLayoutData()])

  return {
    props: {
      markdown: markdown.default,
      ...layout,
    },
  }
}

export default About

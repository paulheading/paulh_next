import styles from 'styles/pages/about.module.scss'
import { getLayoutData } from 'scripts'
import { Fragment } from 'react'
import ReactMarkdown from 'react-markdown'

import Layout from 'layouts/main'
import Content from 'components/content'
import Wrap from 'components/wrap'
import Page from 'components/about_page'
import PageRow from 'components/page/row'

function About(props) {
  const { markdown } = props
  const h3 = '###'
  const sections = markdown.split(h3)

  function Tearoffs(section, index) {
    if (index > 0) section = h3 + section
    return (
      <PageRow key={'row' + index} simple>
        <ReactMarkdown>{section}</ReactMarkdown>
      </PageRow>
    )
  }

  return (
    <Fragment>
      <Content>
        <Page>
          <div className={styles.copy}>{sections.map(Tearoffs)}</div>
        </Page>
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

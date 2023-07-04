import { getLayoutData, getResumeData } from 'scripts'
import { Fragment } from 'react'

import Layout from 'layouts/main'
import Content from 'components/content'
import Page from 'components/page'

function Resume(props) {
  const { heroes, projects, gem, npm, spotify, roles, education, udemy, markdown } = props
  const layoutProps = { heroes, projects, gem, npm, spotify }
  const pageProps = {
    projects,
    roles,
    education,
    udemy,
    markdown,
  }

  return (
    <Fragment>
      <Content>
        <Page {...pageProps} />
      </Content>
      <Layout {...layoutProps} />
    </Fragment>
  )
}

export async function getStaticProps() {
  const [markdown, layout, resume] = await Promise.all([import(`../markdown/biography.md`), getLayoutData(), getResumeData()])

  return {
    props: {
      markdown: markdown.default,
      ...layout,
      ...resume,
    },
  }
}

export default Resume

import { getLayoutData, getResumeData } from 'scripts'
import { Fragment } from 'react'

import Layout from 'layouts/main'
import Content from 'components/content'
import Page from 'components/page'

function Resume(props) {
  var { projects, gem, npm, spotify, roles, education, udemy, markdown } = props
  var layoutProps = { projects, gem, npm, spotify }
  var pageProps = {
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
  var [markdown, layout, resume] = await Promise.all([import(`../markdown/biography.md`), getLayoutData(), getResumeData()])

  return {
    props: {
      markdown: markdown.default,
      ...layout,
      ...resume,
    },
  }
}

export default Resume

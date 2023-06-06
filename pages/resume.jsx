import Layout from 'layouts/main'
import { getLayoutData, getResumeData } from 'scripts'
import Content from 'components/content'
import Page from 'components/page'
import { Fragment } from 'react'

function Resume({ heroes, projects, gem, npm, spotify, roles, education, udemy, markdown }) {
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
  const markdown = await import(`../markdown/biography.md`)

  return {
    props: {
      ...(await getLayoutData()),
      ...(await getResumeData()),
      markdown: markdown.default,
    },
  }
}

export default Resume

import Layout from 'layouts/main'
import { getLayoutData, getResumeData } from 'scripts'
import Content from 'components/content'
import Page from 'components/page'
import { Fragment } from 'react'

function Resume({ heroes, projects, gem, npm, spotify, roles, education, treehouse }) {
  const layoutProps = { heroes, projects, gem, npm, spotify }
  const pageProps = {
    projects,
    roles,
    education,
    treehouse,
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
  return {
    props: {
      ...(await getLayoutData()),
      ...(await getResumeData()),
    },
  }
}

export default Resume

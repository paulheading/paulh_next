import Layout from 'layouts/main'
import { getLayoutData, getResumeData, getPagesData } from 'scripts'
import Content from 'components/content'
import Page from 'components/page'
import { Fragment } from 'react'

function Resume({ heroes, projects, gem, npm, spotify, roles, education, udemy, pages }) {
  const about = pages.filter((page) => page.name == 'About')[0]
  const layoutProps = { heroes, projects, gem, npm, spotify }
  const pageProps = {
    projects,
    roles,
    education,
    udemy,
    about,
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
      ...(await getPagesData()),
    },
  }
}

export default Resume

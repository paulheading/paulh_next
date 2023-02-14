import Layout from 'layouts/main'
import { getLayoutData, getResumeData } from 'scripts'
import Page from 'components/page'

function Resume({ heroes, projects, gem, npm, spotify, roles, education, treehouse }) {
  const layoutProps = { heroes, projects, gem, npm, spotify }
  const pageProps = {
    projects,
    roles,
    education,
    treehouse,
  }
  return (
    <Layout {...layoutProps}>
      <Page {...pageProps} />
    </Layout>
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

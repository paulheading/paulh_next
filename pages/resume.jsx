import Layout from 'layouts/main'
import { getResumeData } from 'scripts'
import Page from 'components/page'

function Resume({ heroes, projects, gem, npm, spotify, pages, roles, education, treehouse }) {
  return <div>test</div>
  const layoutProps = { heroes, projects, gem, npm, spotify }
  const pageProps = {
    pages,
    projects,
    roles,
    education,
    treehouse,
  }
  return <Layout {...layoutProps}>{<Page {...pageProps} />}</Layout>
}

export async function getStaticProps() {
  const resume = await getResumeData()
  return {
    props: {
      ...resume,
    },
  }
}

export default Resume

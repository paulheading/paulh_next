import Layout from 'layouts/main'
import { getLayoutData, getResumeData } from 'scripts'
import Page from 'components/page'

function Resume({ heroes, projects, gem, npm, spotify, pages, roles, education, treehouse }) {
  const layoutProps = { heroes, projects, gem, npm, spotify }
  const pageProps = {
    pages,
    projects,
    roles,
    education,
    treehouse,
  }
  return <Layout {...layoutProps}>{/* <Page {...pageProps} /> */}</Layout>
}

export async function getStaticProps() {
  const layout = await getLayoutData()
  const resume = await getResumeData()

  return {
    props: { ...layout, ...resume },
  }
}

export default Resume

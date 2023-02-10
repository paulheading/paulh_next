import Layout from 'layouts/main'
import { getLayoutData, getAboutData } from 'scripts'
import Content from 'components/404/content'

function About({ heroes, projects, gem, npm, spotify, pages }) {
  const layoutProps = { heroes, projects, gem, npm, spotify }
  return (
    <Layout {...layoutProps}>
      <Content pages={pages} />
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      ...(await getLayoutData()),
      ...(await getAboutData()),
    },
  }
}

export default About

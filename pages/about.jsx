import Layout from 'layouts/main'
import { getLayoutData } from 'scripts'
import Content from 'components/about/content'

function About(props) {
  const { pages } = props
  return (
    <Layout {...props}>
      <Content pages={pages} />
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      ...(await getLayoutData()),
    },
  }
}

export default About

import Layout from 'layouts/main'
import { getLayoutData } from 'scripts'
import Content from 'components/about/content'

function About(props) {
  return (
    <Layout {...props}>
      <Content />
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

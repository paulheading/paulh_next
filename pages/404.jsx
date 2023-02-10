import Layout from 'layouts/main'
import { getLayoutData } from 'scripts'
import Content from 'components/404/content'

function NotFound(props) {
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

export default NotFound

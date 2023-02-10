import Layout from 'layouts/main'
import Hero from 'components/hero'
import { getLayoutData } from 'scripts'
import useCount from 'hooks/useCount'

function Home(props) {
  const { heroes } = props
  const count = useCount(heroes)
  const hero = heroes[count]

  return (
    <Layout {...props}>
      <Hero hero={hero} />
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

export default Home

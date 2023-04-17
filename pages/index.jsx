import Layout from 'layouts/main'
import Hero from 'components/hero'
import { getLayoutData } from 'scripts'
import useCount from 'hooks/useCount'
import { Fragment } from 'react'

function Home(props) {
  const { heroes } = props
  const count = useCount(heroes)
  const hero = heroes[count]

  return (
    <Fragment>
      <Hero hero={hero} />
      <Layout {...props} />
    </Fragment>
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

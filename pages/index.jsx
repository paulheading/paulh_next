import { getLayoutData } from 'scripts'
import useCount from 'hooks/useCount'
import { Fragment } from 'react'

import Layout from 'layouts/main'
import Hero from 'components/hero'

function Home(props) {
  var { heroes } = props
  var count = useCount(heroes)
  var hero = heroes[count]

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

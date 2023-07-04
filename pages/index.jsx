import { getLayoutData } from 'scripts'
import useCount from 'hooks/useCount'
import { Fragment } from 'react'

import Hero from 'components/hero'
import Layout from 'layouts/main'

function Home(props) {
  var { projects } = props
  var heroes = projects.filter(({ hero }) => hero)
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
  const layout = await getLayoutData()

  return {
    props: {
      ...layout,
    },
  }
}

export default Home

import Layout from 'layouts/main'
import Hero from 'components/hero'
import { getLayoutData } from 'scripts'
import useCount from 'hooks/useCount'
import { Fragment } from 'react'
import { contains, environment } from 'scripts/helpers'

function Home(props) {
  var { heroes } = props

  if (!environment.isLocal()) heroes = heroes.filter(({ labels }) => !contains.label(labels, environment.local))

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

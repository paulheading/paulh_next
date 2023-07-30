import useCount from 'hooks/useCount'
import { Fragment } from 'react'

import Hero from 'components/hero'
import Layout from 'layouts/main'

import layout from 'data/layout.json'
import seo from 'data/seo'

function Home() {
  var { projects } = layout
  var heroes = projects.filter(({ hero }) => hero)
  var count = useCount(heroes)
  var hero = heroes[count]

  const layoutProps = {
    seo: {
      keywords: seo.keywords('portfolio'),
      desc: "I'm a " + seo.job.title + '. ' + seo.job.description,
    },
  }

  return (
    <Fragment>
      <Hero hero={hero} />
      <Layout {...layoutProps} />
    </Fragment>
  )
}

export default Home

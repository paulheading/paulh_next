import { Fragment, useEffect, useState } from 'react'
import Marquee from 'components/marquee'
import Desktop from 'components/desktop'
import Contact from 'components/contact'
import Footer from 'components/footer'
import useCount from 'hooks/useCount'
import Head from 'components/head'

import layout from 'data/layout.json'

function Main(props) {
  const [firstTime, setFirstTime] = useState(true)
  var { projects, spotify, gem, npm } = layout
  var { seo = null } = props

  useEffect(() => {
    setFirstTime(false)
  },[])

  var heroes = projects.filter(({ hero }) => hero)
  var count = useCount(heroes)
  var hero = heroes[count]
  var desktopProps = {
    projects,
    spotify,
    count,
    gem,
    npm,
  }
  var marqueeProps = {
    ...hero,
    firstTime
  }

  return (
    <Fragment>
      <Head dynamic={seo} />
      <Marquee {...marqueeProps} />
      <Desktop {...desktopProps} />
      <Contact />
      <Footer />
    </Fragment>
  )
}

export default Main

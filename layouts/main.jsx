import { Fragment } from 'react'
import Marquee from 'components/marquee'
import Desktop from 'components/desktop'
import Contact from 'components/contact'
import Footer from 'components/footer'
import useCount from 'hooks/useCount'
import Head from 'components/head'

export default function Main({ heroes, projects, spotify, gem, npm, seo = null }) {
  const count = useCount(heroes)
  const hero = heroes[count]
  const desktopProps = {
    projects,
    spotify,
    count,
    gem,
    npm,
  }

  return (
    <Fragment>
      <Head dynamic={seo} />
      <Marquee hero={hero} />
      <Desktop {...desktopProps} />
      <Contact />
      <Footer />
    </Fragment>
  )
}

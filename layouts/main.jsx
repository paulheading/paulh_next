import { Fragment } from 'react'
import Menu from 'components/menu'
import Marquee from 'components/marquee'
import Desktop from 'components/desktop'
import Contact from 'components/contact'
import Footer from 'components/footer'
import useCount from 'hooks/useCount'
import Head from 'components/head'

export default function Main({ head, children, heroes, projects, spotify, gem, npm }) {
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
      <Head {...head} />
      <Menu hero={hero} />
      {children}
      <Marquee hero={hero} />
      <Desktop {...desktopProps} />
      <Contact />
      <Footer />
    </Fragment>
  )
}

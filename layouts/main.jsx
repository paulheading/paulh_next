import { Fragment } from 'react'
import Marquee from 'components/marquee'
import Desktop from 'components/desktop'
import Contact from 'components/contact'
import Footer from 'components/footer'
import useCount from 'hooks/useCount'

export default function Main({ heroes, projects, spotify, gem, npm }) {
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
      <Marquee hero={hero} />
      <Desktop {...desktopProps} />
      <Contact />
      <Footer />
    </Fragment>
  )
}

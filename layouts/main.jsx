import Menu from 'components/menu'
import Marquee from 'components/marquee'
import Desktop from 'components/desktop'
import Contact from 'components/contact'
import Footer from 'components/footer'
import useCount from 'hooks/useCount'

export default function Main({ children, heroes, projects, spotify, gem, npm }) {
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
    <div>
      <Menu hero={hero} />
      {children}
      <Marquee hero={hero} />
      <Desktop {...desktopProps} />
      <Contact />
      <Footer />
    </div>
  )
}

import styles from 'styles/components/menu.module.scss'
import { useRouter } from 'next/router'
import Link from 'next/link'
import data from 'data/menu'
import Wrap from 'components/wrap'
import useMediaQuery from 'hooks/useMediaQuery'
import PaulHDesktop from 'logos/paulh/desktop'
import PaulHMobile from 'logos/paulh/mobile'

export default function Menu() {
  const desktop = useMediaQuery(600)
  const router = useRouter()
  const isHome = router.asPath === '/'

  function Links({ title, children }) {
    if (title === 'Home') return

    function isActive() {
      let active = false
      if ('/' + title === router.asPath) active = true
      return active
    }

    const activeClass = isActive() ? styles.active : null
    const isAbout = title === 'About' ? styles.about_link : styles.link
    const className = `${isAbout} ${activeClass}`

    const props = {
      href: title.toLowerCase(),
      className,
    }

    return <Link {...props}>{children}</Link>
  }

  const linkProps = {
    className: styles.link_home,
    href: '/',
  }

  const containerProps = {
    className: isHome ? styles.home_container : styles.container,
  }

  return (
    <div {...containerProps}>
      <Wrap className={styles.wrap}>
        <Link {...linkProps}>{desktop ? <PaulHDesktop /> : <PaulHMobile />}</Link>
        <div className={styles.links}>
          {data.map(({ title, icon }, index) => {
            const props = {
              className: desktop ? 'medium-up' : 'medium-down',
              title,
              index,
            }
            return (
              <Links {...props} key={title + index}>
                {desktop ? <span className="medium-up">{title}</span> : <span className="medium-down">{icon}</span>}
              </Links>
            )
          })}
        </div>
      </Wrap>
    </div>
  )
}

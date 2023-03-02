import styles from 'styles/components/menu.module.scss'
import { useRouter } from 'next/router'
import Link from 'next/link'
import data from 'data/menu'
import Wrap from 'components/wrap'
import useMediaQuery from 'hooks/useMediaQuery'
import PaulHDesktop from 'logos/paulh/desktop'
import PaulHMobile from 'logos/paulh/mobile'

function SmallUp({ children }) {
  return <span className="small-up">{children}</span>
}

function SmallDown({ children }) {
  return <span className="small-down">{children}</span>
}

export default function Menu() {
  const desktop = useMediaQuery(520)
  const router = useRouter()
  const isHome = router.pathname === '/'

  function Links({ title, children }) {
    if (title === 'Home') return

    function isActive() {
      let active = false
      if ('/' + title.toLowerCase() === router.pathname) active = true
      return active
    }

    function customClass() {
      switch (title) {
        case 'About':
          return styles.about_link
        case 'Resume':
          return styles.resume_link
        default:
          return styles.link
      }
    }

    function className() {
      let result = customClass()
      if (isActive()) result += ' ' + styles.active
      return result
    }

    const props = {
      href: title.toLowerCase(),
      className: className(),
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
        <Link {...linkProps}>
          {desktop ? (
            <SmallUp>
              <PaulHDesktop />
            </SmallUp>
          ) : (
            <SmallDown>
              <PaulHMobile />
            </SmallDown>
          )}
        </Link>
        <div className={styles.links}>
          {data.map(({ title, icon }, index) => {
            const props = {
              title,
              index,
            }
            return (
              <Links {...props} key={title + index}>
                {desktop ? <SmallUp>{title}</SmallUp> : <SmallDown>{icon}</SmallDown>}
              </Links>
            )
          })}
        </div>
      </Wrap>
    </div>
  )
}

import styles from 'styles/components/menu.module.scss'
import { useRouter } from 'next/router'
import data from 'data/menu'
import Link from 'next/link'

import Desktop from 'logos/paulh/desktop'
import Mobile from 'logos/paulh/mobile'
import Wrap from 'components/wrap'
import Ready from 'components/ready'
import SmallDown from 'components/media/small/down'
import SmallUp from 'components/media/small/up'

function Logo() {
  return (
    <div className={styles.logo}>
      <SmallUp>
        <Desktop />
      </SmallUp>
      <SmallDown>
        <Mobile />
      </SmallDown>
    </div>
  )
}

function Menu() {
  const { pathname } = useRouter()
  const isHome = pathname === '/'

  const containerStyles = isHome ? styles.home_container : styles.away_container

  function Content({ title, href, children }) {
    if (title == 'Home') return

    const isActive = () => href == pathname

    function contentStyles() {
      var result = styles.link + ' ' + styles[title.toLowerCase() + '_link']
      if (isActive()) result += ' ' + styles.active
      return result
    }

    const props = {
      className: contentStyles(),
      href,
    }

    return isActive() ? <span className={props.className}>{children}</span> : <Link {...props}>{children}</Link>
  }

  function Links({ title, href, icon }, index) {
    const props = {
      title,
      href,
      index,
    }
    return (
      <Ready key={title + index}>
        <Content {...props}>
          <SmallUp>{title}</SmallUp>
          <SmallDown>{icon}</SmallDown>
        </Content>
      </Ready>
    )
  }

  function WrapLogo() {
    if (isHome) return <Logo />

    const props = {
      className: styles.logo_link,
      href: '/',
    }

    return (
      <a {...props}>
        <Logo />
      </a>
    )
  }

  return (
    <div className={containerStyles}>
      <Wrap className={styles.wrap}>
        <WrapLogo />
        <div className={styles.links}>{data.map(Links)}</div>
      </Wrap>
    </div>
  )
}

export default Menu

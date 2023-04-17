import styles from 'styles/components/menu2.module.scss'
import Desktop from 'logos/paulh/desktop'
import Mobile from 'logos/paulh/mobile'
import Wrap from 'components/wrap'
import { useRouter } from 'next/router'
import useMediaQuery from 'hooks/useMediaQuery'
import data from 'data/menu'
import Ready from 'components/ready'
import Link from 'next/link'
import { Fragment } from 'react'
import Head from 'components/head'

function Logo() {
  const smallUp = useMediaQuery(520)
  return <div className={styles.logo}>{smallUp ? <Desktop /> : <Mobile />}</div>
}

function Menu2() {
  const { pathname } = useRouter()
  const isHome = pathname === '/'
  const smallUp = useMediaQuery(520)

  const containerStyles = isHome ? styles.home_container : styles.away_container

  function Content({ title, children }) {
    if (title === 'Home') return

    const isActive = () => '/' + title.toLowerCase() === pathname

    function contentStyles() {
      let result = styles.link + ' ' + styles[title.toLowerCase() + '_link']
      if (isActive()) result += ' ' + styles.active
      return result
    }

    const props = {
      href: title.toLowerCase(),
      className: contentStyles(),
    }

    return isActive() ? <span className={props.className}>{children}</span> : <Link {...props}>{children}</Link>
  }

  function Links({ title, icon }, index) {
    const props = {
      title,
      index,
    }
    return (
      <Ready key={title + index}>
        <Content {...props}>{smallUp ? title : icon}</Content>
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
    <Fragment>
      <Head />
      <div className={containerStyles}>
        <Wrap className={styles.wrap}>
          <WrapLogo />
          <div className={styles.links}>{data.map(Links)}</div>
        </Wrap>
      </div>
    </Fragment>
  )
}

export default Menu2

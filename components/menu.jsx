import styles from 'styles/components/menu.module.scss'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Fragment } from 'react'

import Desktop from 'logos/paulh/desktop'
import Mobile from 'logos/paulh/mobile'
import Wrap from 'components/wrap'
import SmallDown from 'components/media/small/down'
import SmallUp from 'components/media/small/up'
import AboutIcon from 'icons/about'
import ResumeIcon from 'icons/resume'

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

function CreateLink(props) {
  const { pathname } = useRouter()
  const { children, icon } = props
  const linkpath = children.replace(' ', '-').toLowerCase()
  const href = '/' + linkpath

  const isActive = href == pathname

  function Content() {
    return (
      <Fragment>
        <SmallUp>{children}</SmallUp>
        <SmallDown>{icon()}</SmallDown>
      </Fragment>
    )
  }

  function contentStyles() {
    var custom = linkpath + '_link'
    var result = styles.link + ' ' + styles[custom]

    if (isActive) result += ' ' + styles.active

    return result
  }

  const linkProps = {
    className: contentStyles(),
    'aria-label': children,
    href,
  }

  return isActive ? (
    <span className={contentStyles()}>
      <Content />
    </span>
  ) : (
    <Link {...linkProps}>
      <Content />
    </Link>
  )
}

function Menu() {
  const { pathname } = useRouter()
  const isHome = pathname == '/'
  const containerStyles = isHome ? styles.home_container : styles.away_container

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
        <div className={styles.links}>
          <CreateLink icon={AboutIcon}>About</CreateLink>
          <CreateLink icon={ResumeIcon}>Resume</CreateLink>
        </div>
      </Wrap>
    </div>
  )
}

export default Menu

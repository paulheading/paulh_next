import styles from 'styles/components/menu.module.scss'
import { useRouter } from 'next/router'
import Link from 'next/link'
import data from 'data/menu'
import Wrap from 'components/wrap'
import useMediaQuery from 'hooks/useMediaQuery'
import PaulHDesktop from 'logos/paulh/desktop'
import PaulHMobile from 'logos/paulh/mobile'
import Ready from 'components/ready'

function Menu({ hero }) {
  const smallUp = useMediaQuery(520)
  const router = useRouter()
  const isHome = router.pathname === '/'
  const loop = 'loop_' + hero.id.slice(0, 5)
  const containerStyles = isHome ? styles.home_container + ' ' + styles[loop] : styles.container

  function Logo() {
    const props = {
      className: styles.home_link + ' ' + styles[loop],
      href: '/',
    }

    return <Ready>{isHome ? <span className={props.className}>{smallUp ? <PaulHDesktop /> : <PaulHMobile />}</span> : <Link {...props}>{smallUp ? <PaulHDesktop /> : <PaulHMobile />}</Link>}</Ready>
  }

  function Content({ title, children }) {
    if (title === 'Home') return

    const isActive = () => '/' + title.toLowerCase() === router.pathname

    function contentStyles() {
      let result = styles.link + ' ' + styles[title.toLowerCase() + '_link']
      if (isActive()) result += ' ' + styles.active
      if (isHome) result += ' ' + styles[loop]
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

  return (
    <div className={containerStyles}>
      <Wrap className={styles.wrap}>
        <Logo />
        <div className={styles.links}>{data.map(Links)}</div>
      </Wrap>
    </div>
  )
}

export default Menu

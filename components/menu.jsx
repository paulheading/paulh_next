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

  function Content({ title, children }) {
    if (title === 'Home') return

    const isActive = () => '/' + title.toLowerCase() === router.pathname

    function contentStyles() {
      let result = styles.link + ' ' + styles[title.toLowerCase() + '_link']
      if (isActive()) result += ' ' + styles.active
      return result
    }

    const props = {
      href: title.toLowerCase(),
      className: contentStyles(),
    }

    return isActive() ? <span className={contentStyles()}>{children}</span> : <Link {...props}>{children}</Link>
  }

  const linkProps = {
    className: styles.home_link,
    href: '/',
  }

  const containerStyles = isHome ? styles.home_container : styles.container

  function linksStyles() {
    let result = styles.links
    if (isHome) result += ' ' + styles[loop]
    return result
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
        <Ready>
          <Link {...linkProps}>{smallUp ? <PaulHDesktop /> : <PaulHMobile />}</Link>
        </Ready>
        <div className={linksStyles()}>{data.map(Links)}</div>
      </Wrap>
    </div>
  )
}

export default Menu

import styles from 'styles/components/menu.module.scss'
import { useRouter } from 'next/router'
import Link from 'next/link'
import data from 'data/menu'
import Wrap from 'components/wrap'
import useMediaQuery from 'hooks/useMediaQuery'
import PaulHDesktop from 'logos/paulh/desktop'
import PaulHMobile from 'logos/paulh/mobile'
import { useState, useEffect } from 'react'

function Ready({ children }) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => setLoaded(true), [])

  return loaded && children
}

export default function Menu() {
  const smallUp = useMediaQuery(520)
  const router = useRouter()
  const isHome = router.pathname === '/'

  function Links({ title, children }) {
    if (title === 'Home') return

    function isActive() {
      let active = false
      if ('/' + title.toLowerCase() === router.pathname) active = true
      return active
    }

    function className() {
      let result = styles[title.toLowerCase() + '_link']
      if (isActive()) result += ' ' + styles.active
      return result
    }

    const props = {
      href: title.toLowerCase(),
      className: className(),
    }

    return isActive() ? <span className={className()}>{children}</span> : <Link {...props}>{children}</Link>
  }

  const linkProps = {
    className: styles.home_link,
    href: '/',
  }

  const containerProps = {
    className: isHome ? styles.home_container : styles.container,
  }

  return (
    <div {...containerProps}>
      <Wrap className={styles.wrap}>
        <Ready>
          <Link {...linkProps}>{smallUp ? <PaulHDesktop /> : <PaulHMobile />}</Link>
        </Ready>
        <div className={styles.links}>
          {data.map(({ title, icon }, index) => {
            const props = {
              title,
              index,
            }
            return (
              <Ready key={title + index}>
                <Links {...props}>{smallUp ? title : icon}</Links>
              </Ready>
            )
          })}
        </div>
      </Wrap>
    </div>
  )
}

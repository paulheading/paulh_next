import styles from 'styles/components/hero.module.scss'
import { CreateLink } from 'components/marquee'
import { useRef, useEffect, Fragment } from 'react'
import { hero as animation } from 'scripts/animation'
import { useRouter } from 'next/router'
import Artwork from 'components/artwork'

function Hero({ hero }) {
  const router = useRouter()
  const isHome = router.pathname == '/'
  const { id, name, local } = hero
  const snippet = id.slice(0, 5)
  const loop = 'loop_' + snippet
  const artwork = useRef(null)

  const containerStyles = styles.container + ' ' + styles[loop]

  const linkStyles = styles.link + ' ' + styles[loop]

  const bannerStyles = isHome && styles.banner + ' ' + styles[loop]

  const createProps = {
    className: linkStyles,
    href: local.url,
  }

  useEffect(() => {
    if (!artwork || !animation[loop]) return
    animation[loop](artwork.current)
  }, [loop])

  const artworkProps = {
    className: styles.artwork,
    ref: artwork,
    snippet,
  }

  return (
    <Fragment>
      <div className={bannerStyles}></div>
      <div className={containerStyles}>
        <h1 className={styles.name}>
          <CreateLink {...createProps}>{name}</CreateLink>
        </h1>
        <Artwork {...artworkProps} />
      </div>
    </Fragment>
  )
}

export default Hero

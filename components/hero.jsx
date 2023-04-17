import styles from 'styles/components/hero.module.scss'
import { CreateLink, NotFound } from 'components/marquee'
import parse from 'html-react-parser'
import { useRef, useEffect, forwardRef, Fragment } from 'react'
import { hero as animation } from 'scripts/animation'
import { useRouter } from 'next/router'

function Hero({ hero }) {
  const router = useRouter()
  const isHome = router.pathname === '/'
  const { id, name, more, svg } = hero
  const loop = 'loop_' + id.slice(0, 5)
  const back = useRef(null)

  const containerStyles = styles.container + ' ' + styles[loop]

  const linkStyles = styles.link + ' ' + styles[loop]

  const bannerStyles = isHome && styles.banner + ' ' + styles[loop]

  const createProps = {
    href: more ? more.url : null,
    className: linkStyles,
  }
  const notProps = {
    className: linkStyles,
    href: '/404',
  }

  useEffect(() => {
    if (!back || !animation[loop]) return
    animation[loop](back.current)
  }, [loop])

  const backProps = {
    className: styles.back,
    ref: back,
  }

  const Svg = forwardRef(({ className }, ref) => {
    return (
      <div ref={ref} className={className}>
        {svg && parse(svg)}
      </div>
    )
  })

  Svg.displayName = 'Svg'

  return (
    <Fragment>
      <div className={bannerStyles}></div>
      <div className={containerStyles}>
        <h1 className={styles.name}>{more ? <CreateLink {...createProps}>{name}</CreateLink> : <NotFound {...notProps}>{name}</NotFound>}</h1>
        <Svg {...backProps} />
      </div>
    </Fragment>
  )
}

export default Hero

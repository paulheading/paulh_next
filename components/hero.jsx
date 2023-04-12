import styles from 'styles/components/hero.module.scss'
import { CreateLink, NotFound } from 'components/marquee'
import parse from 'html-react-parser'
import { useRef, useEffect, forwardRef } from 'react'
import { hero as animation } from 'scripts/animation'

function Hero({ hero }) {
  const { id, name, more, svg } = hero
  const loop = 'loop_' + id.slice(0, 5)
  const back = useRef(null)

  const containerStyles = styles.container + ' ' + styles[loop]

  const linkStyles = styles.link + ' ' + styles[loop]

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
    <div className={containerStyles}>
      <h1 className={styles.name}>{more ? <CreateLink {...createProps}>{name}</CreateLink> : <NotFound {...notProps}>{name}</NotFound>}</h1>
      <Svg {...backProps} />
    </div>
  )
}

export default Hero

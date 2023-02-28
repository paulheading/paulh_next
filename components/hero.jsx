import styles from 'styles/components/hero.module.scss'
import { CreateLink, NotFound } from 'components/marquee'
import parse from 'html-react-parser'
import { useRef, useEffect } from 'react'
import { hero as animation } from 'scripts/animation'

function Hero({ hero }) {
  const { id, name, more, svg } = hero
  const slice = id.slice(0, 5)
  const containerProps = { className: styles.container, id: slice }
  const loop = 'loop_' + slice
  const ref = useRef(null)

  const createProps = {
    href: more ? more.url : null,
    className: styles.link,
  }
  const notProps = {
    className: styles.link,
    href: '/404',
  }

  useEffect(() => {
    if (!ref || !animation[loop]) return
    animation[loop](ref.current)
  })

  return (
    <div {...containerProps}>
      <h1 className={styles.name}>{more ? <CreateLink {...createProps}>{name}</CreateLink> : <NotFound {...notProps}>{name}</NotFound>}</h1>
      <div ref={ref} className={styles.svg}>
        {svg && parse(svg)}
      </div>
    </div>
  )
}

export default Hero

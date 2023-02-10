import styles from 'styles/components/hero.module.scss'
import { CreateLink, NotFound } from 'components/marquee'
import parse from 'html-react-parser'
import { useEffect } from 'react'
import gsap from 'gsap'

function Hero({ hero }) {
  const { id, name, more, svg } = hero
  const containerProps = { className: styles.container, id: id.slice(0, 5) }
  const createProps = {
    href: more ? more.url : null,
    className: styles.link,
  }
  const notProps = {
    className: styles.link,
    href: '/404',
  }

  useEffect(() => {
    // const target = '#svg'
    // const tl = gsap.timeline()
    // tl.set(target, { clearProps: 'all' }).to(target, { opacity: 0 })
  })

  return (
    <div {...containerProps}>
      <h1 className={styles.name}>{more ? <CreateLink {...createProps}>{name}</CreateLink> : <NotFound {...notProps}>{name}</NotFound>}</h1>
      <div id="svg" className={styles.svg}>
        {svg && parse(svg)}
      </div>
    </div>
  )
}

export default Hero

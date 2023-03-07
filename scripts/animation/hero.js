import { gsap } from 'gsap'
import { MorphSVGPlugin } from 'gsap/dist/MorphSVGPlugin'

const hero = {}

hero.loop_60734 = function (target) {
  const getChild = (selector) => target.querySelector('#' + selector)
  const fillOpacity = 0.5
  const fill = '#ffe666'

  const cursor = {
    selector: getChild('cursor'),
    duration: 0.8,
    delay: 0.2,
  }

  const box = {
    selectors: [getChild('left_1'), getChild('left_2'), getChild('left_3'), getChild('left_4'), getChild('left_5')],
    duration: 0.4,
    delay: 0.2,
  }

  const main = {
    selectors: [getChild('main_1'), getChild('main_2'), getChild('main_3'), getChild('main_4'), getChild('main_5'), getChild('main_6'), getChild('main_7')],
    duration: 0.4,
    delay: 0.2,
  }

  // RESET ALL SELECTORS

  gsap.set([cursor.selector, main.selectors, box.selectors], { clearProps: 'all' })

  // SETUP ANIMATIONS

  cursor.tl = gsap.timeline({ defaults: { duration: cursor.duration } })

  box.tl = gsap.timeline({ defaults: { duration: box.duration } })

  main.tl = gsap.timeline({ defaults: { duration: main.duration } })

  main.sequence = function () {
    main.selectors.forEach((selector) => main.tl.set(selector, { fill }))
    return main.tl.to(main.selectors, { fillOpacity, stagger: 0.1 })
  }

  cursor.tl.to(cursor.selector, { x: -105, y: -45 }).to(cursor.selector, { y: 45, duration: 1, delay: cursor.delay }).add(main.sequence)

  box.tl
    .set(box.selectors[0], {
      fill,
      fillOpacity,
      delay: 0.6,
    })
    .set(box.selectors[0], { clearProps: 'all', delay: 0.5 })
    .set(box.selectors[1], {
      fill,
      fillOpacity,
      delay: 0.1,
    })
    .set(box.selectors[1], { clearProps: 'all', delay: 0.1 })
    .set(box.selectors[2], { fill, fillOpacity, delay: 0.1 })
    .set(box.selectors[2], { clearProps: 'all', delay: 0.1 })
    .set(box.selectors[3], { fill, fillOpacity, delay: 0.1 })
}

hero.loop_606d7 = function (target) {
  const getChild = (selector) => target.querySelector('#' + selector)
  const tl = gsap.timeline()

  const hall = getChild('hall')
  const garden = getChild('garden')
  const corridor = getChild('corridor')
  const lobby = getChild('lobby')
  const stage = getChild('stage')
  const sound = getChild('sound')

  const map = {
    selectors: [hall, garden, corridor, lobby, stage, sound],
  }

  const bar_1 = getChild('bar_1')
  const bar_2 = getChild('bar_2')
  const bar_3 = getChild('bar_3')
  const bar_4 = getChild('bar_4')
  const bar_5 = getChild('bar_5')

  const gantt = {
    selectors: [bar_1, bar_2, bar_3, bar_4, bar_5],
  }

  const marker = getChild('marker')

  // RESET ALL SELECTORS

  gsap.set([map.selectors, gantt.selectors, marker], { clearProps: 'all' })

  // SETUP ANIMATIONS

  const duration = 0.4

  gsap.registerPlugin(MorphSVGPlugin)

  tl.to(sound, { opacity: duration, duration })
    .set(sound, { opacity: 0 })
    .to(sound, { opacity: duration, duration })
    .set(sound, { opacity: 0 })
    .to(hall, { morphSVG: bar_1 }, 'together')
    .to(garden, { morphSVG: bar_2 }, 'together')
    .to(stage, { morphSVG: bar_3 }, 'together')
    .to(lobby, { morphSVG: bar_4 }, 'together')
    .to(corridor, { morphSVG: bar_5 }, 'together')
    .set(marker, { display: 'block', x: '-=20' })
    .to(marker, { x: '+=60', duration: 2 })
}

export default hero

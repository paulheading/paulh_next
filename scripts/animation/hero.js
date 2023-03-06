import { gsap } from 'gsap'

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

  const boxes = {
    selector: [getChild('left_1'), getChild('left_2'), getChild('left_3'), getChild('left_4'), getChild('left_5')],
    duration: 0.4,
    delay: 0.2,
  }

  const main = {
    selector: [getChild('main_1'), getChild('main_2'), getChild('main_3'), getChild('main_4'), getChild('main_5'), getChild('main_6'), getChild('main_7')],
    duration: 0.4,
    delay: 0.2,
  }

  cursor.tl = gsap.timeline({ defaults: { duration: cursor.duration } })

  boxes.tl = gsap.timeline({ defaults: { duration: boxes.duration } })

  main.tl = gsap.timeline({ defaults: { duration: main.duration } })

  main.sequence = function () {
    main.selector.forEach((selector) => main.tl.set(selector, { fill, fillOpacity, stroke: 'none' }))
    return main.tl.to(main.selector, { opacity: 1, stagger: 0.1 })
  }

  cursor.tl.to(cursor.selector, { x: -105, y: -45 }).to(cursor.selector, { y: 45, duration: 1, delay: cursor.delay }).add(main.sequence)

  boxes.tl
    .set(boxes.selector[0], {
      fill,
      fillOpacity,
      delay: 0.6,
    })
    .set(boxes.selector[0], { clearProps: 'all', delay: 0.5 })
    .set(boxes.selector[1], {
      fill,
      fillOpacity,
      delay: 0.1,
    })
    .set(boxes.selector[1], { clearProps: 'all', delay: 0.1 })
    .set(boxes.selector[2], { fill, fillOpacity, delay: 0.1 })
    .set(boxes.selector[2], { clearProps: 'all', delay: 0.1 })
    .set(boxes.selector[3], { fill, fillOpacity, delay: 0.1 })
}

hero.loop_606d7 = function (target) {
  const getChild = (selector) => target.querySelector('#' + selector)
  const tl = gsap.timeline()
  const fill = '#66ffe5'
  const line = '#3354ff'

  const map = getChild('map')
  const stage = getChild('stage')
  const sound = getChild('sound')

  const marker = getChild('marker')

  function radiate() {
    const duration = 0.5
    const fillOpacity = 0.3
    const repeatDelay = duration
    const transformOrigin = 'center'

    const tl = gsap.timeline({ repeat: 2, repeatDelay })

    tl.to(sound, { scale: 1.4, y: -4, fillOpacity, transformOrigin, duration })
  }

  tl.set([stage, sound], { stroke: 'none', fill }).add(radiate, 'now')
  // .to(marker, { x: '+=51', ease: 'none', duration: 2 }, 'now')
}

export default hero

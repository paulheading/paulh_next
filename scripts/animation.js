import { SteppedEase, gsap } from 'gsap'
import { Draggable } from 'gsap/dist/Draggable'
import duration from 'data/duration'

const marquee = {}

marquee.defaults = { x: -(duration * 30), ease: 'none', duration }

marquee.start = (target) => gsap.to(target, marquee.defaults)

const window = {}

window.defaults = {
  duration: 0.2,
}

window.open = function (target) {
  const tl = gsap.timeline()
  const { duration } = window.defaults
  tl.set(target, { display: 'block' }).to(target, {
    scale: 1,
    opacity: 1,
    duration,
  })
}

window.close = function (target) {
  const tl = gsap.timeline()
  const { duration } = window.defaults
  tl.to(target, { scale: 0.5, opacity: 0, duration }).set(target, {
    display: 'none',
  })
}

window.toggle = (open, target) => (open ? window.open(target) : window.close(target))

window.draggable = function (target) {
  gsap.registerPlugin(Draggable)
  Draggable.create(target)
}

window.hover = function (open, target) {
  const tl = gsap.timeline({ paused: true, repeat: -1, yoyo: true })
  tl.to(target, { y: '+=3', duration: 0.6 })
  open ? tl.play() : tl.pause()
}

window.bump = (target) => gsap.set(target, { zIndex: 3 })

window.unbump = (target) => gsap.set(target, { clearProps: 'zIndex' })

const wifi = {}

wifi.defaults = {
  stagger: 0.2,
  delay: 0.2,
}

wifi.next = (opacity = 1) => ({ ...wifi.defaults, opacity })

wifi.search = (target) => {
  const path = target.children
  const all = [path[0], path[1], path[2]]
  const tl = gsap.timeline()
  const { next } = wifi
  tl.set(all, { clearProps: 'all' }).set([path[2], path[1]], next(0.5)).set([path[1]], next(1))
}

const clock = {}

clock.defaults = {
  delay: wifi.defaults.delay * 0.5,
  ease: SteppedEase.config(1),
}

clock.next = (opacity = 1) => ({ ...clock.defaults, opacity })

clock.blink = (target) => {
  const tl = gsap.timeline({ repeat: -1 })
  const { next } = clock
  tl.to(target, next(0.5)).to(target, next(1))
}

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

export { marquee, window, wifi, clock, hero }

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
  tl.set(target, { display: 'block' }).to(target, { scale: 1, opacity: 1, duration })
}

window.close = function (target) {
  const tl = gsap.timeline()
  const { duration } = window.defaults
  tl.to(target, { scale: 0.5, opacity: 0, duration }).set(target, { display: 'none' })
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
  const tl = gsap.timeline({ defaults: { duration: 0.8 } })
  const fillOpacity = 0.5
  const fill = '#ffe666'
  const delay = 0.2

  const getChild = (selector) => target.querySelector('#' + selector)

  const cursor = getChild('cursor')
  const left_1 = getChild('left_1')
  const left_2 = getChild('left_2')
  const left_3 = getChild('left_3')
  const main = getChild('main')

  tl.to(cursor, { x: -105, y: -40 }).set(left_1, { fill, fillOpacity }).set(left_1, { fill, fillOpacity: 0, delay }).to(cursor, { y: -10 }).set(left_2, { fill, fillOpacity }).set(left_2, { fill, fillOpacity: 0, delay }).to(cursor, { y: 20 }).set(left_3, { fill, fillOpacity })
}

export { marquee, window, wifi, clock, hero }

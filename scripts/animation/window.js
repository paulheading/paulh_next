import { gsap } from 'gsap'
import { Draggable } from 'gsap/dist/Draggable'

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

export default window

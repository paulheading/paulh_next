import { gsap } from 'gsap'
import { Draggable } from 'gsap/dist/Draggable'

const window = {}

window.defaults = {
  duration: 0.2,
}

window.open = function (settings, target) {
  const tl = gsap.timeline()
  const { duration } = window.defaults

  if (settings.focus) tl.set(target, { zIndex: 3 })

  // prettier-ignore

  tl.set(target, { display: 'block' })
    .to(target, { opacity: 1, duration, scale: 1 })
}

window.close = function (target) {
  const tl = gsap.timeline()
  const { duration } = window.defaults

  // prettier-ignore

  tl.to(target, { scale: 0.5, opacity: 0, duration })
    .set(target, { display: 'none', clearProps: 'z-index' })
}

window.toggle = (settings, target) => (settings.open ? window.open(settings, target) : window.close(target))

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

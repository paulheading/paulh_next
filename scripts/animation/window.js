import { gsap } from 'gsap'
import { Draggable } from 'gsap/dist/Draggable'

const _window = {}

_window.defaults = {
  duration: 0.2,
}

_window.open = function (settings, target) {
  const tl = gsap.timeline()
  const { duration } = _window.defaults

  // const windows = document.getElementById('windows')

  // var zIndex = 2

  // for (var index = 0; index < windows.children.length; index++) {
  //   const window = windows.children[index]

  //   if (target != window) {
  //     const priority = window.style.zIndex
  //     if (priority >= zIndex) zIndex = Number(priority) + 1
  //   }
  // }

  // if (settings.focus) tl.set(target, { zIndex })

  // prettier-ignore

  tl.set(target, { display: 'block' })
    .to(target, { opacity: 1, duration, scale: 1 })
}

_window.close = function (target) {
  const tl = gsap.timeline()
  const { duration } = _window.defaults

  // prettier-ignore

  tl.to(target, { scale: 0.5, opacity: 0, duration })
    .set(target, { display: 'none', clearProps: 'z-index' })
}

_window.toggle = (settings, target) => (settings.open ? _window.open(settings, target) : _window.close(target))

_window.draggable = function (target) {
  gsap.registerPlugin(Draggable)

  Draggable.create(target)
}

_window.hover = function (open, target) {
  const tl = gsap.timeline({ paused: true, repeat: -1, yoyo: true })

  tl.to(target, { y: '+=3', duration: 0.6 })

  open ? tl.play() : tl.pause()
}

_window.bump = (target) => gsap.set(target, { zIndex: 3 })

_window.unbump = (target) => gsap.set(target, { clearProps: 'zIndex' })

export default _window

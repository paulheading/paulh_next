import { SteppedEase, gsap } from 'gsap'
import wifi from 'scripts/animation/wifi'

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

export default clock

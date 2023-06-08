import { gsap } from 'gsap'

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

export default wifi

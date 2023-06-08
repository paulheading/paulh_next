import { gsap } from 'gsap'
import duration from 'data/duration'

const marquee = {}

marquee.defaults = { x: -(duration * 30), ease: 'none', duration }

marquee.start = (target) => gsap.to(target, marquee.defaults)

export default marquee

import { gsap } from 'gsap'
import duration from 'data/duration'

const marquee = {}

let x = -(duration * 30)
let ease = 'none'

marquee.start = function (target) {
  const tl = gsap.timeline()

  var content = document.querySelector(target)
  var parent = content.parentElement

  var sentences = content.children
  var words = sentences[0].children

  const generateNumber = (max) => Math.floor(Math.random() * max)

  function onStart() {
    console.log('started')
  }

  function onComplete() {
    tl.set(parent, {})
  }

  // prettier-ignore
  tl.set(parent, { clearProps: 'all' }, '0')
    .to(target, { x, ease, duration }, '0')
    .set(parent, { textDecoration: 'none' }, duration - 1)

  return tl
}

export default marquee

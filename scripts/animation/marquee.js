import { gsap } from 'gsap'
import duration from 'data/duration'

let x = -(duration * 30)
let ease = 'none'
let offset = 0.6
let end = duration - offset
let textDecoration = 'none'
let opacity = 0
let clearProps = 'text-decoration'

// prettier-ignore
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]
  }

  return array
}

const marquee = {}

marquee.start = function (target) {
  const tl = gsap.timeline()

  var content = document.querySelector(target)
  var parent = content.parentElement

  var sentences = content.children
  var words = sentences[0].children

  function endEvents() {
    tl.set(parent, { textDecoration }, end)

    let values = []

    for (let index = 0; index < words.length; index++) values.push(index)

    values = shuffle(values)

    let single_offset = offset / values.length

    for (let v_index = 0; v_index < values.length; v_index++) {
      for (let s_index = 0; s_index < sentences.length; s_index++) {
        const value = values[v_index]
        const sentence = sentences[s_index]
        const word = sentence.children[value]
        const delay = Number(end + v_index * single_offset)

        tl.set(word, { opacity }, delay)
      }
    }
  }

  // prettier-ignore
  tl.set(parent, { clearProps })
    .to(target, { ease, x, duration })
    .add(endEvents, end)
}

export default marquee

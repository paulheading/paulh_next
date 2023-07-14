import { gsap } from 'gsap'
import duration from 'data/duration'

const marquee = {}

marquee.defaults = { x: -(duration * 30), ease: 'none', duration }

marquee.start = function (target) {
  const tl = gsap.timeline()

  var everything = document.querySelector(target)
  var link = everything.parentElement

  var sentences = everything.children
  var words = sentences[0].children
  var speed = 0.125

  var max_length = words.length * speed
  var offset = marquee.defaults.duration - max_length

  const generateNumber = (max) => Math.floor(Math.random() * max)

  function randomWords(visibility, offset = 0) {
    var selected = []

    for (var word_index = 0; word_index < words.length; word_index++) {
      var random = generateNumber(words.length)

      while (selected.includes(random)) {
        random = generateNumber(words.length)
      }

      for (var sentence_index = 0; sentence_index < sentences.length; sentence_index++) {
        const delay = word_index * speed
        var sentence = sentences[sentence_index]
        var word = sentence.children[random]
        var last = sentences.length - 1

        if (visibility == 'hidden') {
          if (sentence_index == 0) tl.set(link, { textDecoration: 'none' }, delay + offset)
        }

        tl.set(word, { visibility }, delay + offset)

        if (visibility == 'visible') {
          if (sentence_index == last) tl.set(link, { clearProps: 'text-decoration' }, delay + offset)
        }
      }

      selected.push(random)
    }
  }

  randomWords('visible')

  tl.to(target, marquee.defaults, '0')

  randomWords('hidden', offset)

  return tl
}

export default marquee

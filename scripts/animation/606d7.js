import { gsap } from 'gsap'
import { MorphSVGPlugin } from 'gsap/dist/MorphSVGPlugin'

function loop_606d7(a, b) {
  gsap.registerPlugin(MorphSVGPlugin)

  const get = {
    back: (selector) => a.querySelector('#' + selector),
    front: (selector) => b.querySelector('#' + selector),
  }

  const back = {
    hall: get.back('hall'),
    garden: get.back('garden'),
    lobby: get.back('lobby'),
    sound: get.back('sound'),
    stage: get.back('stage'),
    bar_1: get.back('bar_1'),
    bar_2: get.back('bar_2'),
    bar_3: get.back('bar_3'),
    bar_4: get.back('bar_4'),
    marker: get.back('marker'),
  }

  const front = {
    marker: get.front('marker'),
  }

  back.rooms = [back.garden, back.stage, back.hall, back.lobby]

  back.all = [...back.rooms, back.sound, back.marker]

  front.all = [front.marker]

  const all = [...back.all, ...front.all]

  const display = 'block'

  const transformOrigin = 'center'

  const duration = 0.5

  const opacity = 0

  const scale = 1.25

  const clearProps = 'all'

  const tl = gsap.timeline({ defaults: { transformOrigin, duration } })

  tl.set(all, { clearProps })
    .set(back.rooms, { display })
    .to(back.sound, { display, opacity, scale, delay: duration })
    .set(back.sound, { clearProps })
    .to(back.sound, { display, opacity, scale })
    .to(back.lobby, { morphSVG: back.bar_1 }, 'next')
    .to(back.hall, { morphSVG: back.bar_2 }, 'next')
    .to(back.stage, { morphSVG: back.bar_3 }, 'next')
    .to(back.garden, { morphSVG: back.bar_4 }, 'next')
    .set(front.marker, { x: -30 })
    .to(front.marker, { display, x: 30, duration: duration * 2 })
    .set(front.marker, { clearProps })
    .set(back.marker, { display, x: 30 })
}

export default loop_606d7

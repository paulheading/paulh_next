import { gsap } from 'gsap'
import { MorphSVGPlugin } from 'gsap/dist/MorphSVGPlugin'

function loop_606d7(target) {
  gsap.registerPlugin(MorphSVGPlugin)

  const get = (selector) => target.querySelector('#' + selector)

  const hall = get('hall')
  const garden = get('garden')
  const lobby = get('lobby')
  const sound = get('sound')
  const stage = get('stage')
  const bar_1 = get('bar_1')
  const bar_2 = get('bar_2')
  const bar_3 = get('bar_3')
  const bar_4 = get('bar_4')
  const marker = get('marker')

  const rooms = [garden, stage, hall, lobby]

  const all = [...rooms, sound, marker]

  const display = 'block'

  const transformOrigin = 'center'

  const duration = 0.5

  const opacity = 0

  const scale = 1.5

  const clearProps = 'all'

  const x = 35

  const animateSound = (delay) => ({ display, opacity, scale, delay: delay ? delay : null })

  const tl = gsap.timeline({ defaults: { transformOrigin, duration } })

  tl.set(all, { clearProps })
    .set(rooms, { display })
    .to(sound, { ...animateSound(duration) })
    .set(sound, { clearProps })
    .to(sound, { ...animateSound() })
    .to(lobby, { morphSVG: bar_1 }, 'next')
    .to(hall, { morphSVG: bar_2 }, 'next')
    .to(stage, { morphSVG: bar_3 }, 'next')
    .to(garden, { morphSVG: bar_4 }, 'next')
    .fromTo(marker, { x: -x }, { display, x, duration: duration * 2 })
}

export default loop_606d7

import { gsap } from 'gsap'
import { DrawSVGPlugin } from 'gsap/dist/DrawSVGPlugin'

function loop_60734(a) {
  gsap.registerPlugin(DrawSVGPlugin)

  const get = {
    back: (selector) => a.querySelector('#' + selector),
  }

  const back = {
    mouse: get.back('mouse'),
    left_squiggle: get.back('left_squiggle'),
    right_squiggle: get.back('right_squiggle'),
    box: get.back('box'),
  }

  back.strokes = [back.mouse, back.left_squiggle, back.right_squiggle]
  back.all = [back.mouse, back.left_squiggle, back.right_squiggle, back.box]

  const duration = {
    mouse: 0.4,
    squiggle: 1.2,
  }

  const tl = gsap.timeline()

  const clearProps = 'all'

  const display = 'block'

  tl.set(back.all, { clearProps })
    .set(back.strokes, { drawSVG: '0% 0%' })
    .set(back.mouse, { display })
    .to(back.mouse, { drawSVG: '0% 100%', duration: duration.mouse })
    .to(back.mouse, { drawSVG: '100% 100%', duration: duration.mouse })
    .set([back.left_squiggle], { display })
    .to([back.left_squiggle], { drawSVG: '0% 100%', duration: duration.squiggle })
    .set([back.box], { display })
    .set([back.right_squiggle], { display })
    .to([back.right_squiggle], { drawSVG: '0% 100%', duration: duration.squiggle })
}

export default loop_60734

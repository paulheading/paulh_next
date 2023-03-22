import { gsap } from 'gsap'
import { DrawSVGPlugin } from 'gsap/dist/DrawSVGPlugin'

function loop_60734(a, b) {
  gsap.registerPlugin(DrawSVGPlugin)

  const get = {
    back: (selector) => a.querySelector('#' + selector),
    front: (selector) => b.querySelector('#' + selector),
  }

  const back = {
    mouse: get.back('mouse'),
    left_squiggle: get.back('left_squiggle'),
    right_squiggle: get.back('right_squiggle'),
    box: get.back('box'),
  }

  const front = {
    mouse: get.front('mouse'),
    left_squiggle: get.front('left_squiggle'),
    right_squiggle: get.front('right_squiggle'),
    box: get.front('box'),
  }

  back.strokes = [back.mouse, back.left_squiggle, back.right_squiggle]
  back.all = [back.mouse, back.left_squiggle, back.right_squiggle, back.box]

  front.strokes = [front.mouse, front.left_squiggle, front.right_squiggle]
  front.all = [front.mouse, front.left_squiggle, front.right_squiggle, front.box]

  const strokes = [...back.strokes, ...front.strokes]
  const all = [...back.all, ...front.all]

  const duration = {
    mouse: 0.4,
    squiggle: 1.2,
  }

  const tl = gsap.timeline()

  const clearProps = 'all'

  const display = 'block'

  tl.set(all, { clearProps })
    .set(strokes, { drawSVG: '0% 0%' })
    .set(back.mouse, { display })
    .to(back.mouse, { drawSVG: '0% 100%', duration: duration.mouse })
    .to(back.mouse, { drawSVG: '100% 100%', duration: duration.mouse })
    .set([front.left_squiggle, back.left_squiggle], { display })
    .to([front.left_squiggle, back.left_squiggle], { drawSVG: '0% 100%', duration: duration.squiggle })
    .set([front.box, back.box], { display })
    .set([front.left_squiggle, front.box], { display: 'none', delay: duration.mouse })
    .set([front.right_squiggle, back.right_squiggle], { display })
    .to([front.right_squiggle, back.right_squiggle], { drawSVG: '0% 100%', duration: duration.squiggle })
    .set(front.right_squiggle, { display: 'none' })
}

export default loop_60734

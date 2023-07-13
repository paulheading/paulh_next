import { gsap } from 'gsap'

function animation(target) {
  const get = (selector) => target.querySelector('#' + selector)

  const star_1 = get('star_1')
  const star_2 = get('star_2')
  const star_3 = get('star_3')
  const star_4 = get('star_4')
  const star_5 = get('star_5')
  const star_6 = get('star_6')

  const stars = [star_2, star_3, star_4, star_5, star_6]

  const face = get('face')

  const echo_1 = get('echo_1')
  const echo_2 = get('echo_2')
  const echo_3 = get('echo_3')

  const echoes = [echo_1, echo_2, echo_3]

  const everything = [star_1, stars, face, echoes]

  const transformOrigin = 'center'

  const tl = gsap.timeline({ defaults: { transformOrigin } })

  // prettier-ignore

  tl.set(everything, { clearProps: 'all' })
    .to(star_1, { display: 'block', rotation: 540 })
    .to(stars, { display: 'block', stagger: 0.1 })
    .to([star_1, stars], { opacity: 0, y: -30, duration: 0.3 })
    .to(face, { display: 'block' })
    .to(echoes, { display: 'block', stagger: 0.1 })
}

export default animation

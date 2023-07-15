import parse from 'html-react-parser'
import styles from 'styles/components/marquee.module.scss'
import { useEffect } from 'react'
import { marquee as animate } from 'scripts/animation'

function CreateLink(props) {
  const { href, className = '', children } = props

  const linkProps = {
    className,
    href,
  }
  return <a {...linkProps}>{children}</a>
}

function Tab(props) {
  const { href } = props
  const message = 'See Project'

  const linkProps = {
    className: styles.tab_link,
    href,
  }

  return (
    <div className={styles.tab_container}>
      <CreateLink {...linkProps}>{message}</CreateLink>
    </div>
  )
}

function Row(props) {
  const { marquee, local, id } = props

  function Repeat() {
    var word_spans = ''
    var words = marquee.split(' ')

    for (let index = 0; index < words.length; index++) {
      if (index > 0) word_spans += ' '
      word_spans += `<span style="visibility: hidden;">${words[index]}</span>`
    }

    var sentence_spans = ''

    for (let index = 0; index < 10; index++) sentence_spans += `<span>${word_spans}</span>`

    return (
      <div id="repeat" className={styles.repeat_container}>
        {parse(sentence_spans)}
      </div>
    )
  }

  useEffect(() => {
    const { start } = animate
    start('#repeat')
  })

  const loop = 'loop_' + id.slice(0, 5)
  const customClass = `${styles.row_container} ${styles[loop]}`

  return (
    <div className={customClass}>
      <CreateLink href={local.url}>
        <Repeat />
      </CreateLink>
    </div>
  )
}

function Marquee(props) {
  const { local } = props.hero

  return (
    <div className={styles.marquee_container}>
      <Tab href={local.url} />
      <Row {...props.hero} />
    </div>
  )
}

export { CreateLink }

export default Marquee

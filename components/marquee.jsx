import parse from 'html-react-parser'
import styles from 'styles/components/marquee.module.scss'
import { useEffect } from 'react'
import { marquee as animate } from 'scripts/animation'
import { useRouter } from 'next/router'

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
  const { asPath } = useRouter()
  const isHome = asPath == '/'

  function tabStyles() {
    var result = styles.tab_link
    result += ' ' + styles[isHome ? 'home' : 'away']
    return result
  }

  const linkProps = {
    className: tabStyles(),
    href,
  }

  return (
    <div className={styles.tab_container}>
      <CreateLink {...linkProps}>See Project</CreateLink>
    </div>
  )
}

function Row(props) {
  const { marquee, local } = props

  function Repeat() {
    var word_spans = ''
    var words = marquee.split(' ')

    for (let index = 0; index < words.length; index++) {
      if (index > 0) word_spans += ' '
      word_spans += `<span>${words[index]}</span>`
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
    animate.start('#repeat')
  }, [props])

  return (
    <div className={styles.row_container}>
      <CreateLink href={local.url}>
        <Repeat />
      </CreateLink>
    </div>
  )
}

function Marquee(props) {
  const { local } = props

  return (
    <div className={styles.marquee_container}>
      <Tab href={local.url} />
      <Row {...props} />
    </div>
  )
}

export { CreateLink }

export default Marquee

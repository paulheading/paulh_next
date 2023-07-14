import Link from 'next/link'
import parse from 'html-react-parser'
import styles from 'styles/components/marquee.module.scss'
import { useEffect } from 'react'
import { marquee as animate } from 'scripts/animation'

function CreateLink({ href, className, children }) {
  const props = {
    className: className ? className : null,
    href,
  }
  return <a {...props}>{children}</a>
}

function NotFound({ href, className, children }) {
  const props = {
    className: className ? className : null,
    href,
  }
  return <Link {...props}>{children}</Link>
}

function Tab({ blog }) {
  const message = 'See Project'
  const createProps = {
    className: styles.tab_link,
    href: blog ? blog.url : null,
  }
  const notProps = {
    className: styles.tab_link,
    href: '/404',
  }

  return <div className={styles.tab_container}>{blog ? <CreateLink {...createProps}>{message}</CreateLink> : <NotFound {...notProps}>{message}</NotFound>}</div>
}

function Row({ marquee, blog, id }) {
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
      {blog ? (
        <CreateLink href={blog.url}>
          <Repeat />
        </CreateLink>
      ) : (
        <NotFound href="/404">
          <Repeat />
        </NotFound>
      )}
    </div>
  )
}

function Marquee({ hero }) {
  const { blog } = hero

  return (
    <div className={styles.marquee_container}>
      <Tab blog={blog} />
      <Row {...hero} />
    </div>
  )
}

export { CreateLink, NotFound }

export default Marquee

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
    var print = ''
    const repeat = new Array(10).fill(0)
    const printRepeat = () => (print += `<span>${marquee}</span>`)
    repeat.forEach(printRepeat)
    return (
      <div id="repeat" className={styles.repeat_container}>
        {parse(print)}
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

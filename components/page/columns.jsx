import styles from 'styles/components/page.module.scss'
import { chop, create, environment } from 'scripts/helpers'
import { CreateLink, NotFound } from 'components/marquee'
import Label from 'components/page/label'
import parse from 'html-react-parser'
import { useState } from 'react'

function ProjectLabels({ name, color, variant }, index) {
  const props = {
    size: 'md',
    variant,
    color,
  }

  return (
    <Label key={'label' + index} {...props}>
      {name}
    </Label>
  )
}

function PrintDue(value, variant) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const date = new Date(value)
  const month = months[date.getMonth()]
  const year = date.getFullYear()
  const due = `${month} ${year}`
  const short = {}

  short.year = year.toString().slice(-2)
  short.due = `${month} ${short.year}`

  if (variant === 'role') return `Until ${short.due}`

  return due
}

function Columns({ id, more, name, dueComplete, due, variant, start, labels, desc }) {
  const [clicked, setClicked] = useState(false)

  if (!variant) variant = 'default'

  labels = labels.filter(({ name }) => name !== environment.local)

  const content = parse(desc)

  if (!labels.length) labels.push({ name: 'Personal', color: 'grey' })

  labels.push({ name: create.date_span(start, due, dueComplete), color: labels[0].color, variant: 'outline' })

  const createProps = {
    href: more ? more.url : null,
  }

  const buttonProps = {
    className: styles.more,
    onClick: () => setClicked(!clicked),
  }

  return (
    <div className={styles.column} key={id}>
      <div className={styles.label_wrap}>{labels.map(ProjectLabels)}</div>
      {more ? <CreateLink {...createProps}>{name}</CreateLink> : <NotFound href="/404">{name}</NotFound>}
      <div className={styles.due_wrap}>
        <em>{dueComplete ? PrintDue(due, variant) : 'Ongoing'}</em>
      </div>
      <div className={styles.desc_wrap}>
        {chop.content(clicked, content)}
        {chop.needed(content) && <button {...buttonProps}>{clicked ? 'less' : 'more'}</button>}
      </div>
    </div>
  )
}

export default Columns

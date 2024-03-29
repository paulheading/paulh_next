import styles from 'styles/components/page/columns.module.scss'
import { chop, create } from 'scripts/helpers'
import { CreateLink } from 'components/marquee'
import Label from 'components/page/label'
import { useState } from 'react'

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

function Columns(props) {
  const { id, blog, name, dueComplete, due, start } = props
  const [clicked, setClicked] = useState(false)

  var { variant, labels, local } = props
  var { summary } = local

  if (!variant) variant = 'default'

  function ProjectLabels({ name, color }, index) {
    const props = {
      color: color ? color : labels[0].color,
      variant: !color ? 'outline' : 'solid',
      size: 'md',
    }

    return (
      <Label key={'label' + index} {...props}>
        {name}
      </Label>
    )
  }

  const durationLabel = {
    name: create.date_span(start, due, dueComplete),
  }

  labels = [...labels, durationLabel]

  const createProps = {
    href: blog ? blog.url : local.url,
  }

  function ToggleButton() {
    const props = {
      className: styles.blog,
      onClick: () => setClicked(!clicked),
    }
    return <button {...props}>{clicked ? 'less' : 'more'}</button>
  }

  return (
    <div className={styles.column} key={id}>
      <div className={styles.label_wrap}>{labels.map(ProjectLabels)}</div>
      <CreateLink {...createProps}>{name}</CreateLink>
      <div className={styles.due_wrap}>
        <em>{dueComplete ? PrintDue(due, variant) : 'Ongoing'}</em>
      </div>
      <div className={styles.desc_wrap}>
        {chop.content(clicked, summary)}
        {chop.needed(summary) && <ToggleButton />}
      </div>
    </div>
  )
}

export default Columns

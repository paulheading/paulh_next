import styles from 'styles/components/page.module.scss'
import { chop } from 'scripts/helpers'
import { CreateLink, NotFound } from 'components/marquee'
import Label from 'components/page/label'
import parse from 'html-react-parser'
import { DateTime } from 'luxon'

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

function Columns(project, index) {
  if (index > 2) return

  if (!project.variant) project.variant = 'default'

  const { id, more, name, dueComplete, due, variant, start } = project
  let { labels, desc } = project

  function dateTest() {
    const today = new Date()
    const startDate = DateTime.fromISO(start)
    const dueDate = dueComplete ? DateTime.fromISO(due) : DateTime.fromJSDate(today)
    const diff = dueDate.diff(startDate, ['years', 'months']).toObject()

    diff.months = Math.round(diff.months)

    const { years, months } = diff

    const print = {
      years: years > 1 ? 'years' : 'year',
      months: months > 1 ? 'months' : 'month',
    }

    const year_month = Math.floor(months * 0.83)

    if (years < 1) return `${months} ${print.months}`

    return `${years}${year_month > 0 ? `.${year_month} ` : ` `} ${print.years}`
  }

  labels = [...labels, { name: dateTest(), color: labels[0].color, variant: 'outline' }]

  const createProps = {
    href: more ? more.url : null,
  }

  const notProps = {
    href: '/404',
  }

  return (
    <div className={styles.column} key={id}>
      <div className={styles.label_wrap}>{labels.map(ProjectLabels)}</div>
      {more ? <CreateLink {...createProps}>{name}</CreateLink> : <NotFound {...notProps}>{name}</NotFound>}
      <div className={styles.due_wrap}>
        <em>{dueComplete ? PrintDue(due, variant) : 'Ongoing'}</em>
      </div>
      <div className={styles.desc_wrap}>{chop.desc(parse(desc))}</div>
    </div>
  )
}

export default Columns

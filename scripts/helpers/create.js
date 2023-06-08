import { DateTime } from 'luxon'

const create = {}

create.label = function ({ name, color = 'purple' }, index) {
  const style = {
    padding: '0.25rem 0.5rem',
    borderRadius: '0.25rem',
    display: 'inline-block',
    backgroundColor: color,
    fontSize: '0.875rem',
    margin: '0.25rem',
    color: 'white',
  }

  return (
    <div key={'label' + index} style={style}>
      {name}
    </div>
  )
}

create.date_span = function (start, due, dueComplete) {
  const today = new Date()
  const start_date = DateTime.fromISO(start)
  const due_date = dueComplete ? DateTime.fromISO(due) : DateTime.fromJSDate(today)
  const diff = due_date.diff(start_date, ['years', 'months']).toObject()

  diff.months = Math.round(diff.months)

  const { years, months } = diff

  const print = {
    years: years > 1 ? 'years' : 'year',
    months: months > 1 ? 'months' : 'month',
  }

  const year_month = Math.floor(months * 0.83)

  if (years < 1) return months + ' ' + print.months

  return `${years}${year_month > 0 ? `.${year_month} ` : ` `} ${print.years}`
}

export default create

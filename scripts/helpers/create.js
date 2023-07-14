import { DateTime } from 'luxon'

const create = {}

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

create.environment = class {
  constructor(name) {
    this.name = name
    this.local_label = 'Local'
  }
  isLocal() {
    return this.local_label == String(this.name)
  }
}

create.person = class {
  constructor({ name, email, location, platforms }) {
    this.name = name
    this.email = this.createEmail(email)
    this.location = location
    this.platforms = platforms.map(this.createPlatform)
  }
  link(name, url, custom) {
    if (custom) url = custom + url
    return <a href={url}>{name}</a>
  }
  createPlatform({ name, url }) {
    const { link } = create.person.prototype
    return { name, url, link: link(name, url) }
  }
  createEmail(email) {
    const { link } = create.person.prototype
    return { address: email, link: link(email, email, 'mailto:') }
  }
}

export default create

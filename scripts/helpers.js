import { DateTime } from 'luxon'

const find = {}

find.by_name = (pages, title) => pages.filter(({ name }) => name == title)[0]

find.sibling_windows = function (element) {
  const parent = element.closest('.window')
  const grandpa = parent.parentElement
  const children = [...grandpa.children]
  return children.filter((child) => child != parent)
}

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

const chop = {}

chop.limit = 100

chop.needed = function (content) {
  if (!content.props) return false

  let { limit } = chop
  let { children } = content.props

  return children.length > limit
}

chop.content = function (clicked, content) {
  let result = []
  let { limit } = chop
  let { children } = content.props

  if (clicked || !chop.needed(content)) return children

  children.split(' ').forEach((word) => {
    if (limit <= word.length) return
    result.push(word)
    limit = limit - word.length
  })

  let last = result.length - 1

  if (result[last].length == 1) result.pop()

  if (result[last]) {
    let last_place = result[last]
    let last_letter = last_place.substr(last_place.length - 1)
    if (last_letter == ',' || last_letter == '.') result[last] = result[last].slice(0, -1)
  }

  return result.join(' ')
}

chop.results = (items, max, page) =>
  items.filter((_, index) => {
    if (index >= max - page) {
      if (index < max) return true
    }
    return false
  })

const toggle = {}

toggle.folders = function (name, folder) {
  if (name.includes('spotify') && folder.name.includes('spotify')) if (name != folder.name) folder.open = false

  if (name.includes('futuro') && folder.name.includes('barbican reset')) folder.open = false

  if (name.includes('barbican reset') && folder.name.includes('futuro')) folder.open = false

  if (folder.name == name) folder.open = !folder.open

  return folder
}

const contains = {}

contains.label = function (labels, check) {
  labels.forEach(({ name }) => {
    if (name == check) return true
  })
  return false
}

function environmentCreator(name) {
  this.name = name
  this.local = 'local'
}

environmentCreator.prototype.isLocal = function () {
  return this.local == String(this.name)
}

const environment = new environmentCreator(process.env.NEXT_PUBLIC_ENVIRONMENT)

function Person({ name, email, location, platforms }) {
  this.name = name
  this.email = this.createEmail(email)
  this.location = location
  this.platforms = platforms.map(this.createPlatform)
}

Person.prototype.link = function (name, url, custom) {
  if (custom) url = custom + url
  return <a href={url}>{name}</a>
}

Person.prototype.createPlatform = function ({ name, url }) {
  const { link } = Person.prototype
  return { name, url, link: link(name, url) }
}

Person.prototype.createEmail = function (email) {
  const { link } = Person.prototype
  return { address: email, link: link(email, email, 'mailto:') }
}

export { find, create, chop, toggle, contains, environment, Person }

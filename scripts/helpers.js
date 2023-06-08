import create from 'scripts/helpers/create'
import find from 'scripts/helpers/find'
import chop from 'scripts/helpers/chop'
import get from 'scripts/helpers/get'

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
  var result = false
  labels.forEach(({ name }) => {
    if (name == check) result = true
  })
  return result
}

class environmentCreator {
  constructor(name) {
    this.name = name
    this.local = 'local'
  }
  isLocal() {
    return this.local == String(this.name)
  }
}

const environment = new environmentCreator(process.env.NEXT_PUBLIC_ENVIRONMENT)

class Person {
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
    const { link } = Person.prototype
    return { name, url, link: link(name, url) }
  }
  createEmail(email) {
    const { link } = Person.prototype
    return { address: email, link: link(email, email, 'mailto:') }
  }
}

export { find, create, chop, toggle, contains, environment, Person, get }

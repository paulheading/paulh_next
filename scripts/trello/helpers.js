import showdown from 'showdown'
import { list } from 'scripts/trello/variables'

const create = {}

create.labels = (target) => (!target.length ? [{ name: 'Personal', color: 'grey' }] : target.map(({ name, color }) => ({ name, color })))

create.html = (target) => new showdown.Converter().makeHtml(target)

create.readMore = (attachments) => {
  const more = attachments.filter(({ name }) => name === 'Read more')
  return more.length ? more[0] : null
}

create.type = (target) => {
  const { pages, roles, projects, education } = list
  if (target == pages) return 'pages'
  if (target == roles) return 'roles'
  if (target == projects) return 'projects'
  if (target == education) return 'education'
  return 'hero'
}

const remove = {}

remove.hero = (name) => name.replace('Hero: ', '')

export { remove, create }

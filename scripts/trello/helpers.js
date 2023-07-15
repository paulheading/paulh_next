import showdown from 'showdown'
import { list } from 'scripts/trello/variables'

const create = {}

/**
 * @summary Formats strings into HTML arrays
 * @param {string} target
 * @returns {array} Array of HTML markup
 */
create.html = (target) => new showdown.Converter().makeHtml(target)

/**
 * @summary Create text snippet. Either summary or description html markup
 */
create.snippet = function (target, position) {
  var hr = '---'

  // (loop) if first character is a backtick, remove it
  while (target.slice(0, 1) == '`') target = target.slice(1)
  // (loop) if last character is a backtick, remove it
  while (target.slice(-1) == '`') target = target.slice(0, -1)

  if (!target.includes(hr)) return create.html(target)

  var split = target.split(hr)

  return create.html(split[position])
}

/**
 * @summary If possible, create text snippet from array position 0
 * @param {string} target - Trello markup
 */
create.summary = (target) => create.snippet(target, 0)

/**
 * @summary If possible, create text snippet from array position 1
 * @param {string} target - Trello markup
 */
create.desc = (target) => create.snippet(target, 1)

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

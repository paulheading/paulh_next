import { create, remove } from 'scripts/trello/helpers'
import { string, list } from 'scripts/trello/variables'
import { contains, environment } from 'scripts/helpers'
import get from 'scripts/helpers/get'

/**
 * @summary Object containing Trello data and helper functions
 */

const getTrello = {}
const mapTrello = {}

/**
 * @function getTrelloJSON
 * @summary Wrapper function for getJSON(). Limited to Trello urls
 * @param {string} target - Trello path
 * @returns {object}
 */
getTrello.JSON = async (target) => await get.JSON(string.url(target)) // string.url is the default trello url path

/**
 * @function getTrelloAttachments
 * @summary Wrapper function for getTrelloJSON(). Limited to attachment urls
 * @param {string} target - Trello path
 * @returns {object}
 */
getTrello.attachments = async (target) => {
  if (!target) return

  // string.attachments is the default trello attachments path
  const results = await getTrello.JSON(string.attachments(target))

  if (!results.length) return []

  return results.map(({ id, name, url }) => ({ id, name, url }))
}

/**
 * @function getTrelloActions
 * @summary Wrapper function for getTrelloJSON(). Limited to action urls
 * @param {string} target - Trello path
 * @returns {object}
 */
getTrello.actions = async function (target) {
  if (!target) return

  // string.attachments is the default trello actions path
  return await await getTrello.JSON(string.actions(target))
}

/**
 * @function getTrelloSvgs
 * @summary Filters the attached actions for svgs. Returns either the first svg or null
 * @param {array} actions
 * @returns {object | null}
 * @deprecated Providing artwork locally instead of running it through trello
 */

getTrello.svgs = function (actions) {
  if (!actions.length) return null
  // Filter content for svg tags.
  const svg = actions.filter(({ data }) => {
    const { text } = data
    return text ? text.startsWith('`<svg') : false
  })
  // If svg exists, return the first. Else return null.
  return svg.length ? svg[0].data.text : null
}

/**
 * @function mapTrelloProjects
 * @param {object} card
 * @returns {object}
 */

mapTrello.projects = function (card) {
  var isHero = card.name.startsWith('Hero: ') ? true : false

  card.name = remove.hero(card.name)
  card.hero = isHero
  card.local.pathname = card.name.replace(/\s+/g, '-').replace(/[.]/g, '').toLowerCase()
  card.local.url = '/project/' + card.local.pathname

  return card
}

async function cardResults(result, list) {
  // locally interpreted formatting of data
  result.local = {}
  result.local.summary = result.desc ? create.summary(result.desc) : null
  result.local.desc = result.desc ? create.desc(result.desc) : null

  result.type = create.type(list)
  result.attachments = result.id ? await getTrello.attachments(result.id) : null
  result.actions = result.id ? await getTrello.actions(result.id) : null
  result.blog = create.blog(result.attachments)
  result.marquee = result.name ? result.name.replace('Hero: ', '') : null
  result.labels = result.labels ? create.labels(result.labels) : null

  // Providing artwork locally instead of running it through trello
  // result.svg = result.type == 'projects' ? getTrello.svgs(result.actions) : null

  return result
}

getTrello.cards = async (list, type) => {
  var results = await getTrello.JSON(string.cards(list), type)

  if (!results.length) return []

  results = results.map((result) => cardResults(result, list))

  return await Promise.all(results)
}

getTrello.data = async function (type) {
  if (type == 'projects') {
    var cards = await getTrello.cards(list.projects)

    cards = cards.map(mapTrello.projects)

    if (!environment.isLocal()) cards = cards.filter(({ labels }) => !contains.label(labels, environment.local))

    return cards
  }

  if (type === 'roles') return await getTrello.cards(list.roles)

  if (type === 'education') return await getTrello.cards(list.education)
}

export default getTrello.data

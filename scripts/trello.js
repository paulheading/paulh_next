import { create, remove } from 'scripts/trello/helpers'
import { string, list } from 'scripts/trello/variables'
import { contains, environment } from 'scripts/helpers'
import get from 'scripts/helpers/get'

/**
 * @summary Object containing Trello data and helper functions
 */

const getTrello = {}

/**
 * @function getTrelloJSON
 * @summary Wrapper function for getJSON(). Limited to Trello urls
 * @param {string} target - Trello path
 * @returns {object}
 */
getTrello.JSON = async function (target) {
  // string.url is the default trello url path
  return await get.JSON(string.url(target))
}

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
 * @function getTrelloProjects
 * @param {array} cards - Array of trello project data objects
 * @returns {array} The same array with the string 'Hero: ' removed from the object.name
 */
getTrello.projects = (cards) => cards.map((card) => ({ ...card, name: remove.hero(card.name) }))

/**
 * @function getTrelloHeroes
 * @param {array} cards - Array of trello project data objects
 * @returns {array} A filtered array of only hero projects
 */

getTrello.heroes = (cards) => {
  cards = cards.filter(({ name }) => name.startsWith('Hero: '))
  // re-use getTrelloProjects to remove 'Hero: ' from the object.name
  return getTrello.projects(cards)
}

async function cardResults(result, list) {
  result.type = create.type(list)
  result.attachments = result.id ? await getTrello.attachments(result.id) : null
  result.actions = result.id ? await getTrello.actions(result.id) : null
  result.more = create.readMore(result.attachments)
  result.marquee = result.name ? result.name.replace('Hero: ', '') : null
  result.desc = result.desc ? create.html(result.desc) : null
  result.labels = result.labels ? create.labels(result.labels) : null

  // Providing artwork locally instead of running it through trello
  // result.svg = result.type == 'projects' ? getTrello.svgs(result.actions) : null

  return result
}

getTrello.cards = async (list) => {
  var results = await getTrello.JSON(string.cards(list))

  results = results.map((result) => cardResults(result, list))

  return await Promise.all(results)
}

getTrello.data = async (type) => {
  if (type == 'projects') {
    var cards = await getTrello.cards(list.projects)
    var result = getTrello.projects(cards)

    if (!environment.isLocal()) result = result.filter(({ labels }) => !contains.label(labels, environment.local))

    return result
  }

  if (type == 'heroes') {
    var cards = await getTrello.cards(list.projects)
    var result = getTrello.heroes(cards)

    if (!environment.isLocal()) result = result.filter(({ labels }) => !contains.label(labels, environment.local))

    return result
  }

  if (type === 'roles') return await getTrello.cards(list.roles)
  if (type === 'education') return await getTrello.cards(list.education)
}

export default getTrello.data

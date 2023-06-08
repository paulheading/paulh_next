import { create, remove } from 'scripts/trello/helpers'
import { string, list } from 'scripts/trello/variables'
import get from 'scripts/helpers/get'

const getTrello = {}

getTrello.JSON = async (target) => await get.JSON(string.url(target))

getTrello.attachments = async (target) => {
  if (!target) return

  const results = await getTrello.JSON(string.attachments(target))

  return results.map(({ id, name, url }) => ({ id, name, url }))
}

getTrello.actions = async (target) => {
  if (!target) return
  return await await getTrello.JSON(string.actions(target))
}

getTrello.svgs = (actions) => {
  if (!actions.length) return null
  const svg = actions.filter(({ data }) => {
    const { text } = data
    return text ? text.startsWith('`<svg') : false
  })
  return svg.length ? svg[0].data.text.slice(1, -1) : null
}

getTrello.projects = (cards) => cards.map((card) => ({ ...card, name: remove.hero(card.name) }))

getTrello.heroes = (cards) => {
  cards = cards.filter(({ name }) => name.startsWith('Hero: '))
  return cards.map((card) => ({ ...card, name: remove.hero(card.name) }))
}

async function cardResults(result, list) {
  result.type = create.type(list)
  result.attachments = result.id ? await getTrello.attachments(result.id) : null
  result.actions = result.id ? await getTrello.actions(result.id) : null
  result.more = create.readMore(result.attachments)
  result.marquee = result.name ? result.name.replace('Hero: ', '') : null
  result.desc = result.desc ? create.html(result.desc) : null
  result.labels = result.labels ? create.labels(result.labels) : null
  result.svg = result.type == 'projects' ? getTrello.svgs(result.actions) : null
  return result
}

getTrello.cards = async (list) => {
  var results = await getTrello.JSON(string.cards(list))

  results = results.map((result) => cardResults(result, list))

  return await Promise.all(results)
}

getTrello.data = async (type) => {
  if (type == 'projects') {
    const cards = await getTrello.cards(list.projects)
    return getTrello.projects(cards)
  }

  if (type == 'heroes') {
    const cards = await getTrello.cards(list.projects)
    return getTrello.heroes(cards)
  }

  if (type === 'roles') return await getTrello.cards(list.roles)
  if (type === 'education') return await getTrello.cards(list.education)
}

export default getTrello.data

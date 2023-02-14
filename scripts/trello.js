import axios from 'axios'
import { list } from 'scripts/trello/variables'
import { removeHero, makeHtml, cardType, prepLabels, readmore, trelloCards, trelloAttachments, trelloActions } from 'scripts/trello/helpers'

const { projects, roles, education } = list

async function getTrelloAttachments(target) {
  if (!target) return
  const { data } = await axios.get(trelloAttachments(target))
  return data.map(({ id, name, url }) => ({ id, name, url }))
}

async function getTrelloActions(target) {
  if (!target) return
  const { data } = await axios.get(trelloActions(target))
  return data
}

function getTrelloSvgs(target) {
  if (target && target.length) {
    const svg = target.filter(({ data }) => {
      const { text } = data
      if (text && text.startsWith('`<svg')) return true
    })
    if (svg.length) return svg[0].data.text.slice(1, -1)
  }
  return null
}

async function getTrelloCards(target) {
  const { data } = await axios.get(trelloCards(target), {
    headers: { Accept: 'application/json' },
  })
  const type = cardType(target)

  const result = data.map(async ({ desc, name, start, due, dueComplete, id, labels }) => {
    let attachments,
      actions,
      more,
      marquee,
      svg = null

    if (id && id !== undefined) {
      attachments = await getTrelloAttachments(id)
      actions = await getTrelloActions(id)
    }

    if (attachments && attachments !== undefined) more = readmore(attachments)
    if (name && name !== undefined) marquee = removeHero(name)
    if (desc !== undefined) desc = makeHtml(desc)
    if (labels && labels !== undefined) labels = prepLabels(labels)
    if (type === 'projects') svg = getTrelloSvgs(actions)

    return {
      svg,
      marquee,
      attachments,
      actions,
      more,
      desc,
      name,
      start,
      due,
      dueComplete,
      id,
      labels,
    }
  })

  return await Promise.all(result)
}

const getTrelloProjects = (projects) => projects.map((project) => ({ ...project, name: project.name.replace('Hero: ', '') }))

function getTrelloHeroes(projects) {
  projects = projects.filter(({ name }) => name.startsWith('Hero: '))
  return projects.map((project) => ({ ...project, name: project.name.replace('Hero: ', '') }))
}

async function getTrelloData(type) {
  if (type === 'projects' || type === 'heroes') {
    const cards = await getTrelloCards(projects)
    return type === 'projects' ? getTrelloProjects(cards) : getTrelloHeroes(cards)
  }
  if (type === 'roles') return await getTrelloCards(roles)
  if (type === 'education') return await getTrelloCards(education)
}

export default getTrelloData

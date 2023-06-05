import getTrelloData from 'scripts/trello'
import getSpotifyData from 'scripts/spotify'
import getGemData from 'scripts/gem'
import getNpmData from 'scripts/npm'
import getUdemyData from 'scripts/udemy'

async function getLayoutData() {
  return {
    heroes: await getTrelloData('heroes'),
    projects: await getTrelloData('projects'),
    pages: await getTrelloData('pages'),
    gem: await getGemData(),
    npm: await getNpmData(),
    spotify: await getSpotifyData(),
  }
}

async function getPagesData() {
  return {
    pages: await getTrelloData('pages'),
  }
}

async function getResumeData() {
  return {
    roles: await getTrelloData('roles'),
    education: await getTrelloData('education'),
    udemy: getUdemyData(),
  }
}

export { getLayoutData, getResumeData, getPagesData }

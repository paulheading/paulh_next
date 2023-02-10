// import getMediumData from 'scripts/medium'
import getTrelloData from 'scripts/trello'
import getSpotifyData from 'scripts/spotify'
import getGemData from 'scripts/gem'
import getNpmData from 'scripts/npm'
// import getTreehouseData from 'scripts/treehouse'

async function getLayoutData() {
  return {
    heroes: await getTrelloData('heroes'),
    projects: await getTrelloData('projects'),
    gem: await getGemData(),
    npm: await getNpmData(),
    spotify: await getSpotifyData(),
  }
}

async function getResumeData() {
  return {
    heroes: await getTrelloData('heroes'),
    projects: await getTrelloData('projects'),
    gem: await getGemData(),
    npm: await getNpmData(),
    spotify: await getSpotifyData(),
    pages: await getTrelloData('pages'),
    roles: await getTrelloData('roles'),
    education: await getTrelloData('education'),
    // treehouse: getTreehouseData(),
  }
}

async function getAboutData() {
  return {
    pages: await getTrelloData('pages'),
  }
}

export { getLayoutData, getAboutData, getResumeData }

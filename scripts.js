// import getMediumData from 'scripts/medium'
import getTrelloData from 'scripts/trello'
import getSpotifyData from 'scripts/spotify'
import getGemData from 'scripts/gem'
import getNpmData from 'scripts/npm'
import getTreehouseData from 'scripts/treehouse'

async function getLayoutData() {
  return {
    ...(await getTrelloData()),
    gem: await getGemData(),
    npm: await getNpmData(),
    spotify: await getSpotifyData(),
    treehouse: getTreehouseData(),
  }
}

export { getLayoutData }

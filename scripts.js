import getTrelloData from 'scripts/trello'
import getSpotifyData from 'scripts/spotify'
import getGemData from 'scripts/gem'
import getNpmData from 'scripts/npm'
import udemy from 'scripts/udemy'

import get from 'scripts/helpers/get'
import { GET_USER_ARTICLES } from 'scripts/hashnode/queries'

async function getLayoutData() {
  const hashnode = await get.gql('https://api.hashnode.com/', GET_USER_ARTICLES, { page: 0 }).then(({ data }) => data.user.publication.posts)
  const projects = await getTrelloData('projects')
  const spotify = await getSpotifyData()
  const gem = await getGemData()
  const npm = await getNpmData()

  return {
    hashnode,
    projects,
    spotify,
    gem,
    npm,
  }
}

async function getResumeData() {
  const education = await getTrelloData('education')
  const roles = await getTrelloData('roles')

  return {
    education,
    roles,
    udemy,
  }
}

export { getLayoutData, getResumeData }

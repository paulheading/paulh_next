import 'dotenv/config'
import fs from 'fs'
import getTrelloData from './trello.js'
import getSpotifyData from './spotify.js'
import getGemData from './gem.js'
import getNpmData from './npm.js'
import getHashnodeData from './hashnode.js'

async function getLayoutData() {
  const hashnode = await getHashnodeData()
  const projects = await getTrelloData('projects')
  const gem = await getGemData()
  const npm = await getNpmData()
  const spotify = await getSpotifyData()

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
  }
}

function handleResult(error) {
  if (error) console.log('there was an error')
}

const layout = [
  '../data/layout.json',
  JSON.stringify(await getLayoutData(), null, 2),
  handleResult,
]

const resume = [
  '../data/resume.json',
  JSON.stringify(await getResumeData(), null, 2),
  handleResult,
]

fs.writeFile(...layout)
fs.writeFile(...resume)

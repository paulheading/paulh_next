import create from './helpers/create.js'
import find from './helpers/find.js'
import chop from './helpers/chop.js'
import get from './helpers/get.js'

const toggle = {}

toggle.folders = function (name, folder) {
  if (name.includes('spotify') && folder.name.includes('spotify')) if (name != folder.name) folder.open = false

  if (name.includes('futuro') && folder.name.includes('barbican reset')) folder.open = false

  if (name.includes('barbican reset') && folder.name.includes('futuro')) folder.open = false

  if (folder.name == name) folder.open = !folder.open

  return folder
}

const contains = {}

contains.label = function (labels, check) {
  var result = false
  labels.forEach(({ name }) => {
    if (name == check) result = true
  })
  return result
}

export { find, create, chop, toggle, contains, get }

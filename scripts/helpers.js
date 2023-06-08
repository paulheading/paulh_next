import create from 'scripts/helpers/create'
import find from 'scripts/helpers/find'
import chop from 'scripts/helpers/chop'
import get from 'scripts/helpers/get'

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

const environment = new create.environment(process.env.NEXT_PUBLIC_ENVIRONMENT)

export { find, create, chop, toggle, contains, environment, get }

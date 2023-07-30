import create from './helpers/create.js'
import find from './helpers/find.js'
import chop from './helpers/chop.js'
import get from './helpers/get.js'
import { marked } from 'marked'

marked.use({ headerIds: false, mangle: false })

const toggle = {}

toggle.folders = function (name, subfolder, folder) {
  if (folder.name == name) {
    if (!folder.group) folder.open = !folder.open
    else {
      folder.group.items.map(function (item) {
        if (item.name == subfolder) item.open = !item.open
        else item.open = false
        return item
      })
    }
  }
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

export { find, create, chop, toggle, contains, get, marked }

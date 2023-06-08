const chop = {}

chop.limit = 100

chop.needed = function (content) {
  if (!content.props) return false

  let { limit } = chop
  let { children } = content.props

  return children.length > limit
}

chop.content = function (clicked, content) {
  let result = []
  let { limit } = chop
  let { children } = content.props

  if (clicked || !chop.needed(content)) return children

  children.split(' ').forEach((word) => {
    if (limit <= word.length) return
    result.push(word)
    limit = limit - word.length
  })

  let last = result.length - 1

  if (result[last].length == 1) result.pop()

  if (result[last]) {
    let last_place = result[last]
    let last_letter = last_place.substr(last_place.length - 1)
    if (last_letter == ',' || last_letter == '.') result[last] = result[last].slice(0, -1)
  }

  return result.join(' ')
}

chop.results = (items, max, page) =>
  items.filter((_, index) => {
    if (index >= max - page) {
      if (index < max) return true
    }
    return false
  })

export default chop

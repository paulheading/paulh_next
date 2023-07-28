const chop = {}

chop.limit = 100

chop.needed = (content) => content.length > chop.limit

chop.content = function (clicked, content) {
  var { children } = content.props

  if (!chop.needed(children)) return children

  if (clicked) return (children += ' ')

  var words = children.split(' ')
  var { limit } = chop
  var result = ''
  var finished = false

  words.forEach((word) => {
    if (limit < word.length) finished = true

    if (finished) return

    if (!result == '') result += ' '

    result += word

    limit -= word.length
  })

  return (result += ' ')
}

chop.results = (items, max, page) =>
  items.filter((_, index) => {
    if (index >= max - page) {
      if (index < max) return true
    }
    return false
  })

export default chop

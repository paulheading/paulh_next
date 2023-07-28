const find = {}

find.by_name = (pages, title) => pages.filter(({ name }) => name == title)[0]

find.sibling_windows = function (element) {
  const parent = element.closest('.window')
  const grandpa = parent.parentElement
  const children = [...grandpa.children]
  return children.filter((child) => child != parent)
}

find.paragraph = function (value, text) {
  text = text.split('<p>')
  text = text.filter((_, index) => index == value)
  return '<p>' + text
}

export default find

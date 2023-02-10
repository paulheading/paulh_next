const find = {}

find.by_name = (pages, title) => pages.filter((page) => page.name === title)[0]

const create = {}

create.label = function ({ name, color = 'purple' }, index) {
  const style = {
    padding: '0.25rem 0.5rem',
    borderRadius: '0.25rem',
    display: 'inline-block',
    backgroundColor: color,
    fontSize: '0.875rem',
    margin: '0.25rem',
    color: 'white',
  }

  return (
    <div key={'label' + index} style={style}>
      {name}
    </div>
  )
}

const chop = {}

chop.desc = function (desc) {
  let result = []
  let limit = 100

  if (desc.props) {
    let { children } = desc.props

    children.split(' ').forEach((word) => {
      if (limit > word.length) {
        result.push(word)
        limit = limit - word.length
      }
    })

    let last = result.length - 1

    if (result[last].length === 1) result.pop()

    if (result[last]) {
      let last_place = result[last]
      let last_letter = last_place.substr(last_place.length - 1)

      if (last_letter === ',' || last_letter === '.') {
        result[last] = result[last].slice(0, -1)
      }
    }

    return result.join(' ') + '...'
  }
}

const toggle = {}

toggle.folders = function (name, folder) {
  if (name.includes('spotify') && folder.name.includes('spotify')) {
    if (name !== folder.name) folder.open = false
  }

  if (name.includes('futuro') && folder.name.includes('barbican reset')) {
    folder.open = false
  }

  if (name.includes('barbican reset') && folder.name.includes('futuro')) {
    folder.open = false
  }

  if (folder.name === name) folder.open = !folder.open

  return folder
}

export { find, create, chop, toggle }

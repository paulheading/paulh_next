async function getNpmData() {
  let id = 'barbican-reset'

  let registry = `https://registry.npmjs.org/${id}`
  registry = await fetch(registry)
  registry = await registry.json()

  let point = `https://api.npmjs.org/downloads/point/last-year/${id}`
  point = await fetch(point)
  point = await point.json()

  const version = registry['dist-tags'].latest
  const downloads = point['downloads']
  const name = point['package']

  return { name, version, downloads, url: 'https://www.npmjs.com/package/barbican-reset' }
}

export default getNpmData

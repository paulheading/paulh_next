// import cache from 'memory-cache'

const get = {}

get.JSON = async function (url) {
  // const alreadyExists = cache.get(url)

  // if (alreadyExists) {
  //   console.log('using cache')
  //   return alreadyExists
  // }

  var data = await fetch(url)

  data = data.json()

  // cache.put(url, data, 60000)

  return data
}

get.gql = async function (url, query, variables = {}) {
  const data = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  return data.json()
}

export default get

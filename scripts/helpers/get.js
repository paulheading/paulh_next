// import cache from 'memory-cache'

const get = {}

get.JSON = async function (url) {
  // const alreadyExists = cache.get(url)

  // if (alreadyExists) {
  //   console.log('already exists: ', alreadyExists)
  //   return alreadyExists
  // }

  const data = await fetch(url)

  // cache.put(url, data, 180000)

  return data.json()
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

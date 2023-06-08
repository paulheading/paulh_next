const get = {}

get.JSON = async (url) => {
  const data = await fetch(url)
  return data.json()
}

get.gql = async (url, query, variables = {}) => {
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

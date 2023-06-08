import { string, playlist, id, secret, base } from 'scripts/spotify/variables'

const getSpotify = {}

getSpotify.token = async () => {
  const data = await fetch(base.token, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + Buffer.from(`${id.client}:${secret.client}`).toString('base64'),
    },
    body: 'grant_type=client_credentials',
  })

  const json = await data.json()

  return json.access_token
}

function trackResults({ track }) {
  const { name, artists, album, external_urls, popularity } = track
  return {
    artist: {
      url: artists[0].external_urls.spotify,
      name: artists[0].name,
    },
    popularity,
    release_date: album.release_date,
    url: external_urls.spotify,
    name,
  }
}

getSpotify.playlist = async (target) => {
  const token = await getSpotify.token()
  const data = await fetch(string.playlist(target), { headers: { Authorization: 'Bearer ' + token } })
  const result = await data.json()

  result.profile = 'https://open.spotify.com/user/' + result.owner.display_name
  result.url = result.external_urls.spotify
  result.followers = result.followers.total
  result.image = result.images[0].url
  result.owner = {
    name: result.owner.display_name,
    url: result.owner.external_urls.spotify,
  }
  result.tracks = result.tracks.items.map(trackResults)

  return result
}

getSpotify.data = async () => ({
  _2020: await getSpotify.playlist(playlist._2020),
  _2021: await getSpotify.playlist(playlist._2021),
  _2022: await getSpotify.playlist(playlist._2022),
})

export default getSpotify.data

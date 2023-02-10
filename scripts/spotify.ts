import axios from 'axios'
import { playlist } from 'scripts/spotify/variables'
import { pathPlaylist, getToken } from 'scripts/spotify/helpers'
import type { sourceTrack, outputTrack } from 'types/scripts'

function prepTracks(items:sourceTrack[]):outputTrack[] {
  return items.map(({ track }) => {
    const { name, artists, album, external_urls, popularity } = track;
    return {
      artist: {
        url: artists[0].external_urls.spotify,
        name: artists[0].name
      },
      popularity,
      release_date: album.release_date,
      url: external_urls.spotify,
      name
    }
  })
}

async function getPlaylist(target: string | undefined) {
  const token = await getToken();  
  const { data } = await axios.get(pathPlaylist(target), { headers: { Authorization: "Bearer " + token } });
  const { name, owner, description, external_urls, followers, images, tracks } = data;

  return {
    profile: `https://open.spotify.com/user/${owner.display_name}`,
    description,
    url: external_urls.spotify,
    followers: followers.total,
    image: images[0].url,
    name,
    owner: {
      name: owner.display_name,
      url: owner.external_urls.spotify
    },
    tracks: prepTracks(tracks.items)
  }
}

const getSpotifyData = async () => ({
    _2020: await getPlaylist(playlist._2020),
    _2021: await getPlaylist(playlist._2021),
    _2022: await getPlaylist(playlist._2022),
})

export default getSpotifyData;
import { base, id, secret } from 'scripts/spotify/variables'

async function getToken() {
  return fetch(base.token, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + Buffer.from(`${id.client}:${secret.client}`).toString('base64'),
    },
    body: "grant_type=client_credentials",
  })
  .then(res => res.json())
  .then(res => res.access_token)
  .catch(err => console.error(err));
}

const pathBase = (target: string) => base.api + target;

const pathPlaylist = (target: string | undefined) => pathBase(`/playlists/${target}`);

export {
  getToken,
  pathPlaylist
}


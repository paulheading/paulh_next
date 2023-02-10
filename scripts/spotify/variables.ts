
export const id = {
  user: process.env.NEXT_PUBLIC_SPOTIFY_ID_USER,
  client: process.env.NEXT_PUBLIC_SPOTIFY_ID_CLIENT
};

export const playlist = {
  _2020: process.env.NEXT_PUBLIC_SPOTIFY_PLAYLIST_2020,
  _2021: process.env.NEXT_PUBLIC_SPOTIFY_PLAYLIST_2021,
  _2022: process.env.NEXT_PUBLIC_SPOTIFY_PLAYLIST_2022,
  _year: process.env.NEXT_PUBLIC_SPOTIFY_PLAYLIST_YEAR,
  _weird: process.env.NEXT_PUBLIC_SPOTIFY_PLAYLIST_WEIRD,
};

export const base = {
  token: "https://accounts.spotify.com/api/token",
  api: "https://api.spotify.com/v1"
};

export const secret = {
  client: process.env.NEXT_PUBLIC_SPOTIFY_SECRET_CLIENT,
};
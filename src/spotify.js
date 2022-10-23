export const auth = 'https://accounts.spotify.com/authorize'
const redirectUri = 'http://localhost:3000'
const clientID = '796177c0f4774095b37456990485dbe4'

const scopes = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-top-read',
  'user-modify-playback-state',
]

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
      let parts = item.split('=')
      initial[parts[0]] = decodeURIComponent(parts[1])
      return initial
    }, {})
}

export const loginUrl = `${auth}?client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopes.join(
  '%20',
)}&response_type=token&show
dialogue=true`

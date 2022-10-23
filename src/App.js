import { useEffect, useState } from 'react'
import './App.css'
import Login from './Login'
import Player from './Player'
import { getTokenFromUrl } from './spotify'
import SpotifyWebApi from 'spotify-web-api-js'

const spotify = new SpotifyWebApi()

function App() {
  const [token, setToken] = useState(null)

  useEffect(() => {
    const _token = getTokenFromUrl()
    window.location.hash = ''
    if (_token) {
      setToken(_token.access_token)
      spotify.setAccessToken(_token.access_token)
      spotify.getMe().then((user) => {
        console.log(user)
      })
    }
  }, [])

  return <div className="app">{token ? <Player /> : <Login />}</div>
}

export default App

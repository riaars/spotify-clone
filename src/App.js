import { useEffect, useState } from 'react'
import './App.css'
import Login from './Login'
import Player from './Player'
import { getTokenFromUrl } from './spotify'

function App() {
  const [token, setToken] = useState(null)

  useEffect(() => {
    const _token = getTokenFromUrl()
    if (_token) {
      setToken(_token.access_token)
    }
  }, [])

  return <div className="app">{token ? <Player /> : <Login />}</div>
}

export default App

import Favorite from '@mui/icons-material/Favorite'
import MoreHoriz from '@mui/icons-material/MoreHoriz'
import PlayCircleFilledOutlined from '@mui/icons-material/PlayCircleFilledOutlined'
import React from 'react'
import './Body.css'
import { useStateValue } from './DataLayer'
import Header from './Header'
import SongRow from './SongRow'

const Body = ({ spotify }) => {
  const [{ discover_weekly }, dispatch] = useStateValue()
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body_info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body_infoText">
          <strong>PLAYLISTS</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body_songs">
        <div className="body_icons">
          <PlayCircleFilledOutlined className="body_shuffle" />
          <Favorite fontSize="large" />
          <MoreHoriz />
        </div>

        {/* List of songs */}
        {discover_weekly?.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))}
      </div>
    </div>
  )
}

export default Body

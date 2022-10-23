import React from 'react'
import './Footer.css'
import PlayCircleFilledOutlined from '@mui/icons-material/PlayCircleFilledOutlined'
import SkipPrevious from '@mui/icons-material/SkipPrevious'
import SkipNext from '@mui/icons-material/SkipNext'
import Shuffle from '@mui/icons-material/Shuffle'
import Repeat from '@mui/icons-material/Repeat'
import { Grid, Slider } from '@mui/material'
import PlaylistPlay from '@mui/icons-material/PlaylistPlay'
import VolumeDown from '@mui/icons-material/VolumeDown'
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <img src="" alt="" className="footer_albumLogo" />
        <div className="footer_songInfo">
          <h4>Yeh</h4>
          <p>user</p>
        </div>
      </div>
      <div className="footer_center">
        <Shuffle className="footer_green" />
        <SkipPrevious className="footer_icon" />
        <PlayCircleFilledOutlined className="footer_icon" fontSize="large" />
        <SkipNext className="footer_icon" />
        <Repeat className="footer_green" />
      </div>
      <div className="footer_right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlay />
          </Grid>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Footer

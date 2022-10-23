import React from 'react'
import './Header.css'
import Search from '@mui/icons-material/Search'
import { Avatar } from '@mui/material'
import { useStateValue } from './DataLayer'

const Header = () => {
  const [{ user }, dispatch] = useStateValue()
  return (
    <div className="header">
      <div className="header_left">
        <Search />
        <input placeholder="Search for Artists, Songs, or Album" type="text" />
      </div>
      <div className="header_right">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  )
}

export default Header

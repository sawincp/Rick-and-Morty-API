import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <div>
        <NavLink to='/characters'>Characters</NavLink>
        <NavLink to='/locations'>Locations</NavLink>
        <NavLink to='/episodes'>Episodes</NavLink> 
    </div>
  )
}

export default Nav

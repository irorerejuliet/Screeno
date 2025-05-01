import React from 'react'
import { NavLink } from 'react-router'

const Logo = () => {
  return (
    <div>
      <NavLink to="/">
        <img src="/images/logo.png" alt="logo" />
    </NavLink>
    </div>
  )
}

export default Logo

import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
      <a
        className='navbar-item navbar-left'
        href='https://github.com/HOPE028/HOPE'
      >
        HOPE
      </a>

      <h5 className='navbar-item navbar-center'>
        <Link to='/'>COUNTRY COMPARE-er</Link>
      </h5>

      <h5 className='navbar-item navbar-right'>
        <Link to='/about'>ABOUT</Link>
      </h5>
    </div>
  )
}

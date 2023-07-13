import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <div className='header'>
      <div>
            <h2>New-Routing-App</h2>
      </div>
      <div className='navLink'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/grandpa'>Grandpa</Link>
      </div>
    </div>
  )
}

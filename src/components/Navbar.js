import { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {
  return (
    <nav>
      <div className='nav-content'>
        <h1 className='shimmer'>Retro Star Wars</h1>
        <div className='links'>
            <Link to="/" activeStyle={{ color: "#F8F0E3" }}>Home</Link>
            <Link to="/about" activeStyle={{ color: "#F8F0E3" }}>About</Link>
            <Link to="/figures" activeStyle={{ color: "#F8F0E3" }} partiallyActive={true}>Figures</Link>
            <Link to="/vehicles" activeStyle={{ color: "#F8F0E3" }} partiallyActive={true}>Vehicles</Link>
            <Link to="/playsets" activeStyle={{ color: "#F8F0E3" }} partiallyActive={true}>Playsets</Link>
        </div>
        </div>
    </nav>
  )
}

import React from 'react'
import Navbar from './Navbar'
import * as styles from '../styles/global.css'
import { Link } from 'gatsby'
import Head from './Head'

export default function Layout({ children }) {
  return (
    <>
        <Head />
        <Navbar />
        <div className={styles.layout}>
        <div className='content'>
            { children }
        </div>
        <footer>
        <div className='links'>
            <Link to="/" activeStyle={{ color: "#F8F0E3" }}>Home</Link>
            <Link to="/about" activeStyle={{ color: "#F8F0E3" }}>About</Link>
            <Link to="/figures" activeStyle={{ color: "#F8F0E3" }} partiallyActive={true}>Figures</Link>
            <Link to="/vehicles" activeStyle={{ color: "#F8F0E3" }} partiallyActive={true}>Vehicles</Link>
            <Link to="/playsets" activeStyle={{ color: "#F8F0E3" }} partiallyActive={true}>Playsets</Link>
        </div>
            <p>
              Website design by
            <a href="http://www.ryanwilsondesign.com" target="_blank" rel="noopener noreferrer"> www.ryanwilsondesign.com </a>
              © 2022
            </p>
        </footer>
    </div>
    </>
  )
}

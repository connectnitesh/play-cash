import React from 'react'
import logo from '../images/image.png';

const Navbar = () => {
  return (
    <nav className="navbar">
  <div className="navbar-left">
    <img className='logo' src={logo} alt="" srcset="" />
    <div className="logo-text">
      <h1><a href="/">STARTUPCASH</a></h1>
      <h2><span>FREE</span> Easy Cash for your Starup</h2>
    </div>
  </div>
  <div className="navbar-right">
    <a href="/events" className="navbar-event">Events</a>
    <a href="/about" className="navbar-event">About</a>
    <a href="/contact" className="navbar-event">Contact</a>
    <a href="/faq" className="navbar-event">FAQ</a>
  </div>
</nav>
  )
}

export default Navbar
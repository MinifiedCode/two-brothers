import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const Navbar = () => (
  <div className="nav">
    {/* replace <p> element with <img> element */}
    <p>Logo here</p>
    {/* routes to components */}
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact Us</Link>
    <Link to="/dashboard">Customer Dashboard</Link>
    <Link to="/quote">Get a Quote</Link>
  </div>
)

export default Navbar
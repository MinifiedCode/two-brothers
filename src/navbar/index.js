import React from 'react'
import './style.css'
import Button from '../common/Button'

const Navbar = () => (
  <div className="nav">
    {/* replace <p> element with <img> element */}
    <p id="logo">Logo here</p>
    {/* routes to components */}
    <Button path="/" text="Home" type="nav" />
    <Button path="/about" text="About" />
    <Button path="/contact" text="Contact Us" />
    <Button path="/dashboard" text="Customer Dashboard" />
    <Button path="/quote" text="Get a Quote" />
  </div>
)

export default Navbar
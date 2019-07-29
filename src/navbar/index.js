import React from 'react'
import './style.css'
import Button from '../common/Button'
import logo from '../img/gardening-30-512.png'

const Navbar = () => (
  <div className="nav">
    {/* replace <p> element with <img> element */}
    <img id="logo" alt={"Two Brothers Lawn Care"} src={logo} />
    {/* routes to components */}
    <div className="nav-buttons">
      <Button path="/" text="Home" type="nav" />
      <Button path="/about" text="About" type="nav" />
      <Button path="/contact" text="Contact Us" type="nav" />
      <Button path="/dashboard" text="Dashboard" type="nav" />
      <Button path="/quote" text="Get a Quote" type="nav" />
    </div>
  </div>
)

export default Navbar
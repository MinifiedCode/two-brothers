import React from 'react'
import './style.css'
import Button from '../common/Button'

const Navbar = () => (
  <div className="nav">
    {/* replace <p> element with <img> element */}
    <img id="logo" alt={"Two Brothers Lawn Care"} src={"https://cdn0.iconfinder.com/data/icons/gardening-30/64/gardening-30-512.png"} />
    <p id="company">Two Brothers Lawn Care</p>
    {/* routes to components */}
    <Button path="/" text="Home" type="nav" />
    <Button path="/about" text="About" type="nav" />
    <Button path="/contact" text="Contact Us" type="nav" />
    <Button path="/dashboard" text="Customer Dashboard" type="nav" />
    <Button path="/quote" text="Get a Quote" type="nav" />
  </div>
)

export default Navbar
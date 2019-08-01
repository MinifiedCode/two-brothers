import React from 'react'
import './style.css'
import Button from '../common/Button'
import logo from '../img/gardening-30-512.png'
import { withRouter } from 'react-router'

import HamburgerMenu from 'react-hamburger-menu'

class Navbar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {activeLink: '/', error: null, open: false, mobileMenu: 'menu-closed'}
  }

  componentDidMount() {
    let path = this.props.location.pathname
    if (path !== "" && this.state.activeLink !== path)
      this.setState({ activeLink: path })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname)
      this.setState({ activeLink: this.props.location.pathname })
  }

  handlePress = e => {
    e.preventDefault()
    this.setState({ 
      open: !this.state.open,
      mobileMenu: this.state.open ? 'menu-closed' : 'menu-open'
    })
  }

  render() {
    return(
      <div className="nav">
        {/* replace <p> element with <img> element */}
        <img id="logo" alt={"Two Brothers Lawn Care"} src={logo} />
        {/* routes to components */}
        <div className="nav-buttons">
          <Button active={this.state.activeLink} exact={true} path="/" text="Home" type="nav" />
          <Button active={this.state.activeLink} path="/about" text="About" type="nav" />
          <Button active={this.state.activeLink} path="/contact" text="Contact Us" type="nav" />
          <Button active={this.state.activeLink} path="/dashboard" text="Dashboard" type="nav" />
          <Button active={this.state.activeLink} path="/quote" text="Get a Quote" type="nav" />
        </div>

        <div className="menu-container">
          {/* <p onClick={this.handlePress}>Yo</p><img onClick={this.handlePress} src="https://img.icons8.com/material-outlined/24/000000/menu.png" alt="Menu"/> */}
          <div className="menu">
            <HamburgerMenu
              id="menuIcon"
              isOpen={this.state.open}
              menuClicked={this.handlePress}
              width={20}
              height={15}
              strokeWidth={1}
              rotate={0}
              color='black'
              borderRadius={0}
              animationDuration={0.5}
            />
          </div>
          <div className={this.state.mobileMenu}>
            <p>Home</p>
            <p>About</p>
            <p>Contact Us</p>
            <p>Dashboard</p>
            <p>Get a Quote</p>
          </div>
        </div>
      </div>
    )
  }
}


export default withRouter(Navbar)
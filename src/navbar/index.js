import React from 'react'
import './style.css'
import Button from '../common/Button'
import logo from '../img/gardening-30-512.png'
import { withRouter } from 'react-router'

class Navbar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {activeLink: '/', error: null}
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
      </div>
    )
  }
}


export default withRouter(Navbar)
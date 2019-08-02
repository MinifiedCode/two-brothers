import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import './button.css'

class Button extends Component {
  constructor(props) {
    super(props)

    this.state = {activeLink: '/'}
  }

  componentDidMount() {
    if (this.props.active === this.props.path) console.log('match')
  }

  componentDidUpdate(prevProps) {
    if (prevProps.active !== this.props.active)
      this.setState({ activeLink: this.props.active })
  } 

  handleSubmit = e => {
    e.preventDefault()
    console.log('submitted')
  }

  render() {
    const { path, text, type, exact } = this.props
    return (
      <NavLink activeClassName={type==="nav-mobile" ? "active-link-mobile" : "active-link"} className={`btn btn-${type}`} exact={exact} to={path}>
        { 
          type === "nav" 
            ? <span className="link"><p>{text}</p></span>
            : <p className="text">{text}</p>
        }
      </NavLink>
    )
  }
}

Button.defaultProps = {
  path: '/',
  text: 'Home'
}

Button.propTypes = {
  active: PropTypes.string,
  exact: PropTypes.bool,
  type: PropTypes.string,
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default withRouter(Button)
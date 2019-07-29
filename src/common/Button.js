import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './button.css'

class Button extends Component {
  handleSubmit = e => {
    e.preventDefault()
    console.log('submitted')
  }

  render() {
    const { path, text, type } = this.props

    return (
      <Link className={`btn btn-${type}`} to={path}>
        <span className="link">{text}</span>
      </Link>
    )
  }
}

Button.defaultProps = {
  path: '/',
  text: 'Home'
}

Button.propTypes = {
  type: PropTypes.string,
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default withRouter(Button)
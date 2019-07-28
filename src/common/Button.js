import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './button.css'

export default class Button extends Component {
  render() {
    let path = this.props.path
    let text = this.props.text
    return (
      <div className="btn">
        <Link to={path}>{text}</Link>
      </div>
    )
  }
}

Button.defaultProps = {
  path: '/',
  text: 'Home'
}

Button.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}
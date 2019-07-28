import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './button.css'

export default class Button extends Component {
  render() {
    let path = this.props.path
    let text = this.props.text
    let type = this.props.type

    return (
      <div className={`btn btn-${type}`}>
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
  type: PropTypes.string,
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}
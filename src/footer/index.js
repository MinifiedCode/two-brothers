import React, { Component } from 'react'
import './footer.css'
import PropTypes from 'prop-types'

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-container">
          <h1>{this.props.company}</h1>
          <p id="companyEmail">mike@mowwichita.com</p>
          <p id="companyPhoneNum">316.650.4981</p>
        </div>
      </div>
    )
  }
}

Footer.propTypes = {
  company: PropTypes.string
}